import { JwtAdapter, generalErrorMessage } from "../../../config"
import { RegisterUserDto } from "../../dtos"
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

interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

export class RegisterUser implements RegisterUserUseCase {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly generateToken: GenerateToken = JwtAdapter.generateToken
    ) { }

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

        const user = await this.authRepository.register(registerUserDto)
        const token = await this.generateToken({ id: user.id })
        if (!token) throw CustomError.internalServerError(generalErrorMessage.UNGENERATED_TOKEN)

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