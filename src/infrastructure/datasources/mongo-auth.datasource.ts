import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";



export class MongoAuthDatasource implements AuthDatasource {

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
                password: password,
            })

            await user.save()

            // 3 Mapear la respuesta a la entidad
            // TODO: falta mapper
            return new UserEntity(
                user.id,
                name,
                email,
                password,
                user.roles
            )
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            } else {
                throw CustomError.internalServerError()
            }
        }
    }

}