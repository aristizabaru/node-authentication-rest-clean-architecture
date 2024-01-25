import { Request, Response } from "express";
import { statusCodeErrorMessage } from "../../config";
import { CustomError, GetUsers, UserRepository } from "../../domain";

export class UserController {

    // DI
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error) // Aquí se debería hacer un log --> winston logger
        return res.status(500).json({ error: statusCodeErrorMessage.INTERNAL_SERVER_ERROR })
    }

    getUsers = (req: Request, res: Response) => {

        new GetUsers(this.userRepository)
            .execute()
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))

    }
}