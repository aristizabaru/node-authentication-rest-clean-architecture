import { Validators, validationErrorMessage } from "../../config";
import { CustomError, UserEntity } from "../../domain";

export class UserMapper {

    static userEntityFromObject(object: { [key: string]: any }): UserEntity {

        const { id, _id, name, email, password, roles } = object

        if (!_id || !id) throw CustomError.badRequest(validationErrorMessage.MISSING_ID)
        if (!name) throw CustomError.badRequest(validationErrorMessage.MISSING_NAME)
        if (!email) throw CustomError.badRequest(validationErrorMessage.MISSING_EMAIL)
        if (!Validators.email.test(email)) throw CustomError.badRequest(validationErrorMessage.INVALID_EMAIL)
        if (!password) throw CustomError.badRequest(validationErrorMessage.MISSING_PASWORD)
        if (password.length < 6) throw CustomError.badRequest(validationErrorMessage.SHORT_PASSWORD)
        if (!roles && roles.length >= 1) throw CustomError.badRequest(validationErrorMessage.MISSING_ROLES)


        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles
        )
    }
}