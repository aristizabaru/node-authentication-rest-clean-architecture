import { Router } from "express"
import { MongoUserDatasource, UserRepositoryImpl } from "../../infrastructure"
import { UserController } from "./controller"
import { AuthMiddleware } from "../middleware"



export class UserRoutes {

    static get routes(): Router {
        const router = Router()
        const userDatasource = new MongoUserDatasource()
        const userRepository = new UserRepositoryImpl(userDatasource)
        const controller = new UserController(userRepository)
        const authMiddleware = new AuthMiddleware()

        // Ejemplo de uso de middleware
        router.get('/', [authMiddleware.validateJwt], controller.getUsers)

        return router

    }
}