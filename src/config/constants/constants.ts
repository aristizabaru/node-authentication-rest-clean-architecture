// Status code error messages
export const statusCodeErrorMessage = {
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    INTERNAL_SERVER_ERROR: 'Internal server error',
}

// Validation error messages
export const validationErrorMessage = {
    MISSING_NAME: 'Missing name',
    MISSING_EMAIL: 'Missing email',
    MISSING_PASWORD: 'Missing pasword',
    MISSING_ID: 'Missing id',
    MISSING_ROLES: 'Missing roles',
    INVALID_EMAIL: 'Email is not valid',
    INVALID_PASSWORD: 'Password is not valid',
    SHORT_PASSWORD: 'Password too short',
    USER_EXISTS: 'User already exists',
    USER_NOT_FOUND: 'User does not exists',
}

// General error messages
export const generalErrorMessage = {
    UNGENERATED_TOKEN: 'Error generating token',
    MISSING_TOKEN: 'No token provided',
    INVALID_TOKEN: 'Invalid token',
}