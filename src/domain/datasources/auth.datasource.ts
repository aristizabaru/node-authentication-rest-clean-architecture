import { RegisterUserDto } from "../dtos";
import { UserEnttity } from "../entities";

export interface AuthDatasource {

    register(registerUserDto: RegisterUserDto): Promise<UserEnttity>

}