import { Validators } from "../../config";
import { CustomError, UserEntity } from "../../domain";

export class UserMapper {

    static userEntityFromObject(object: { [key: string]: any }): UserEntity {

        const { id, _id, name, email, password, roles } = object

        if (!_id || !id) throw CustomError.badRequest('Missing id')
        if (!name) throw CustomError.badRequest('Missing name')
        if (!email) throw CustomError.badRequest('Missing email')
        if (!Validators.email.test(email)) throw CustomError.badRequest('Email is not valid')
        if (!password) throw CustomError.badRequest('Missing password')
        if (password.length < 6) throw CustomError.badRequest('Password too short')
        if (!roles && roles.length >= 1) throw CustomError.badRequest('Missing roles')


        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles
        )
    }
}