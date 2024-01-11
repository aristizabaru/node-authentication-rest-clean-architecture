import { RegisterUserDto } from "../dtos";
import { UserEntity } from "../entities";

export interface AuthDatasource {

    register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}