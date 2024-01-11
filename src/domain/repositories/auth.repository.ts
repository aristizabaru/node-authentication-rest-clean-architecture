import { RegisterUserDto } from "../dtos";
import { UserEnttity } from "../entities";

export interface AuthRepository {

    register(registerUserDto: RegisterUserDto): Promise<UserEnttity>

}