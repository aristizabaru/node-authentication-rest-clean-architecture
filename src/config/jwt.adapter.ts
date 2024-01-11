import jwt from 'jsonwebtoken'
import { envs } from './env.adapter'

const JWT_SEED = envs.JWT_SEED

export class JwtAdapter {

    static async generateToken(payload: Object, duration: string = '1y'): Promise<string | null> {

        return new Promise(resolve => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (error, token) => {
                if (error) return resolve(null)

                resolve(token!)
            })
        })

    }

}