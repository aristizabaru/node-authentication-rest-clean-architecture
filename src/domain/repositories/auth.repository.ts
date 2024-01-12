import { RegisterUserDto, LoginUserDto } from "../dtos";
import { UserEntity } from "../entities";

export interface AuthRepository {

    login(loginUserDto: LoginUserDto): Promise<UserEntity>
    register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}