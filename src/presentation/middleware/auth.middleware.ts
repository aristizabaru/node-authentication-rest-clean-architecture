import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data";

type ValidateToken = <T> (token: string) => Promise<T | null>

export class AuthMiddleware {

    constructor(
        private readonly validateToken: ValidateToken = JwtAdapter.validateToken
    ) { }

    validateJwt = async (req: Request, res: Response, next: NextFunction) => {

        const authorization = req.header('Authorization')

        if (!authorization) return res.status(401).json({ error: 'No token provided' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' })

        const token = authorization.split(' ').at(1) ?? ''

        try {

            const payload = await this.validateToken<{ id: string }>(token)
            if (!payload) return res.status(401).json({ error: 'Invalid token' })

            // Validate user
            // TODO: convertir a caso de uso de usuario. Código acoplado
            const user = await UserModel.findById(payload.id)
            // Se debe loguear incidencia porque token firmado no debe fallar en la busqueda
            if (!user) return res.status(500).json({ error: 'Internal server error' })

            req.body.user = user

            next()
        } catch (error) {
            console.log(error) // Se debería de loguear --> winston
            res.status(500).json({ error: 'Internal server error' })
        }


    }

}