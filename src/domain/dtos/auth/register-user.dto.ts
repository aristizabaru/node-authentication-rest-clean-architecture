import { Validators, validationErrorMessage } from "../../../config"

export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const { name, email, password } = object

        if (!name) return [validationErrorMessage.MISSING_NAME]
        if (!email) return [validationErrorMessage.MISSING_EMAIL]
        if (!Validators.email.test(email)) return [validationErrorMessage.INVALID_EMAIL]
        if (!password) return [validationErrorMessage.MISSING_PASWORD]
        if (password.length < 6) return [validationErrorMessage.SHORT_PASSWORD]

        return [
            undefined,
            new RegisterUserDto(name, email.toLowerCase(), password)
        ]
    }

}
