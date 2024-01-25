import { Validators, validationErrorMessage } from "../../../config"


export class LoginUserDto {

    private constructor(
        public email: string,
        public password: string
    ) { }

    static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
        const { email, password } = object

        if (!email) return [validationErrorMessage.MISSING_EMAIL]
        if (!Validators.email.test(email)) return [validationErrorMessage.INVALID_EMAIL]
        if (!password) return [validationErrorMessage.MISSING_PASWORD]
        if (password.length < 6) return [validationErrorMessage.SHORT_PASSWORD]

        return [
            undefined,
            new LoginUserDto(email.toLowerCase(), password)
        ]
    }

}
