import { Request, Response } from "express";
import { AuthRepository, CustomError, RegisterUser, RegisterUserDto } from "../../domain";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";

export class AuthController {

    // DI
    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error) // Aquí se debería hacer un log --> winston logger
        return res.status(500).json({ error: 'Internal Server Error' })
    }

    registerUser = (req: Request, res: Response) => {

        const [error, registerUserDto] = RegisterUserDto.create(req.body)
        if (error) return res.status(400).json({ error })

        new RegisterUser(this.authRepository)
            .execute(registerUserDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))

    }

    loginUser = (req: Request, res: Response) => {
        res.json('login from controller')
    }

    getUsers = (req: Request, res: Response) => {
        UserModel.find()
            .then(users => res.json({
                users,
                user: req.body.user
            }))
            .catch(() => res.status(500).json({ error: 'Internal server error' }))
    }
}