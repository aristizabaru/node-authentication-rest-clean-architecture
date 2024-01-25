import { UserEntity } from "../../entities";

export interface UserRepository {

    getUsers(): Promise<UserEntity[]>

}