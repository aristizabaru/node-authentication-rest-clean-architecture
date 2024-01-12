import { Router } from "express"
import { AuthRepositoryImpl, MongoAuthDatasource } from "../../infrastructure"
import { AuthController } from "./controller"
import { AuthMiddleware } from "../middleware"



export class AuthRoutes {

    static get routes(): Router {
        const router = Router()
        const authDatasource = new MongoAuthDatasource()
        const authRepository = new AuthRepositoryImpl(authDatasource)
        const controller = new AuthController(authRepository)
        const authMiddleware = new AuthMiddleware()

        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)
        router.get('/', [authMiddleware.validateJwt], controller.getUsers)

        return router

    }
}