export class CustomError extends Error {

    constructor(
        public readonly statusCode: number,
        public readonly message: string
    ) {
        super(message)
    }

    static badRequest(message: string = 'Bad request'): CustomError {
        return new CustomError(400, message)
    }

    static unauthorized(message: string = 'Unauthorized'): CustomError {
        return new CustomError(401, message)
    }

    static forbidden(message: string = 'Forbidden'): CustomError {
        return new CustomError(403, message)
    }

    static notFound(message: string = 'Not found'): CustomError {
        return new CustomError(404, message)
    }

    static internalServerError(message: string = 'Internal server error'): CustomError {
        return new CustomError(500, message)
    }
}