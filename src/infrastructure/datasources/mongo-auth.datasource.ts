import { HashAdapter } from "../../config";
import { UserModel } from "../../data";
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers";

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean
type UserMapperFromObjectFunction = (object: { [key: string]: any; }) => UserEntity

export class MongoAuthDatasource implements AuthDatasource {

    // DI
    constructor(
        private readonly hashPassword: HashFunction = HashAdapter.hash,
        private readonly comparePassword: CompareFunction = HashAdapter.compare,
        private readonly userMapperFromObject: UserMapperFromObjectFunction = UserMapper.userEntityFromObject
    ) { }

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { email, password } = loginUserDto

        try {
            // 1. Verificar si el correo existe
            const user = await UserModel.findOne({ email: email })
            if (!user) throw CustomError.badRequest('User does not exists')

            // 2. Validate password
            const isMatching = this.comparePassword(password, user.password)
            if (!isMatching) throw CustomError.badRequest('Password is not valid')

            // 3 Mapear la entidad a la respuesta
            return this.userMapperFromObject(user)

        } catch (error) {
            throw error // El catch está en el controlador
        }
    }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto

        try {
            // 1. Verificar si el correo existe
            const emailExists = await UserModel.findOne({ email: email })
            if (emailExists) throw CustomError.badRequest('User already exists')

            // 2. Hash contraseña
            const user = await UserModel.create({
                email: email,
                name: name,
                password: this.hashPassword(password),
            })

            await user.save()

            // 3 Mapear la entidad a la respuesta
            return this.userMapperFromObject(user)

        } catch (error) {
            throw error // El catch está en el controlador
        }
    }

}