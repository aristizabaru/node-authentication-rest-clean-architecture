import { AuthDatasource, AuthRepository, RegisterUserDto, UserEnttity } from "../../domain";



export class AuthRepositoryImpl implements AuthRepository {

    // DI
    constructor(
        private readonly authDatasource: AuthDatasource
    ) { }

    register(registerUserDto: RegisterUserDto): Promise<UserEnttity> {
        return this.authDatasource.register(registerUserDto)
    }

}