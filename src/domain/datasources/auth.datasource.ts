import { RegisterUserDto, LoginUserDto } from "../dtos";
import { UserEntity } from "../entities";

export interface AuthDatasource {

    login(loginUserDto: LoginUserDto): Promise<UserEntity>
    register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}