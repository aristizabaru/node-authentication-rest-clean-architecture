import { JwtAdapter } from "../../../config"
import { LoginUserDto } from "../../dtos"
import { CustomError } from "../../errors"
import { AuthRepository } from "../../repositories"


type GenerateToken = (payload: Object, duration?: string) => Promise<string | null>

interface UserToken {
    token: string
    user: {
        id: string
        name: string
        email: string
    }
}

interface LoginUserUseCase {
    execute(loginUserDto: LoginUserDto): Promise<UserToken>
}

export class LoginUser implements LoginUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly generateToken: GenerateToken = JwtAdapter.generateToken
    ) { }

    async execute(loginUserDto: LoginUserDto): Promise<any> {

        const user = await this.authRepository.login(loginUserDto)
        const token = await this.generateToken({ id: user.id })
        if (!token) throw CustomError.internalServerError('Error generating token')

        return {
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        }
    }

}