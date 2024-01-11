import { AuthDatasource, CustomError, RegisterUserDto, UserEnttity } from "../../domain";



export class AuthDatasourceImpl implements AuthDatasource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEnttity> {
        const { name, email, password } = registerUserDto

        try {
            // 1. Verificar si el correo existe

            // 2. Hash contraseña

            // 3 Mapear la respuesta a la entidad

            return new UserEnttity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE']
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