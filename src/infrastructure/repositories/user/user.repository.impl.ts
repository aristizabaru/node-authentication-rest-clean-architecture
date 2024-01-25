import { UserDatasource, UserEntity, UserRepository } from "../../../domain"

export class UserRepositoryImpl implements UserRepository {

    constructor(
        private readonly userDatasource: UserDatasource
    ) { }

    getUsers(): Promise<UserEntity[]> {
        return this.userDatasource.getUsers()
    }

}