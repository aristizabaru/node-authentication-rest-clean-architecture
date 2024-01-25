import { UserModel } from "../../../data";
import { UserDatasource, UserEntity } from "../../../domain";
import { UserMapper } from "../../mappers";

type UserMapperFromObjectFunction = (object: { [key: string]: any }) => UserEntity

export class MongoUserDatasource implements UserDatasource {

    // DI
    constructor(
        private readonly userMapperFromObject: UserMapperFromObjectFunction = UserMapper.userEntityFromObject
    ) { }

    async getUsers(): Promise<UserEntity[]> {
        try {
            const users = await UserModel.find()

            return users.map(user => this.userMapperFromObject(user))
        } catch (error) {
            throw error // El catch está en el controlador
        }
    }

}