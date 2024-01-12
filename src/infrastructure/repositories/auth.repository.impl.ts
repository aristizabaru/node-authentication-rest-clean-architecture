import { AuthDatasource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {

    // DI
    constructor(
        private readonly authDatasource: AuthDatasource
    ) { }

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto)
    }

}