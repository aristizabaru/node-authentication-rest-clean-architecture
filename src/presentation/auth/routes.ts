import { Router } from "express"
import { AuthController } from "./controller"
import { AuthRepositoryImpl, MongoAuthDatasource } from "../../infrastructure"


export class AuthRoutes {

    static get routes(): Router {
        const router = Router()
        const authDatasource = new MongoAuthDatasource()
        const authRepository = new AuthRepositoryImpl(authDatasource)
        const controller = new AuthController(authRepository)

        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)
        router.get('/', controller.getUsers)

        return router

    }
}