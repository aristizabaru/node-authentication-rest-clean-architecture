import { UserEntity } from "../../entities";

export interface UserDatasource {

    getUsers(): Promise<UserEntity[]>

}