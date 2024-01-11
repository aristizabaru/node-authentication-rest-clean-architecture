import { RegisterUserDto } from "../dtos";
import { UserEntity } from "../entities";

export interface AuthRepository {

    register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}