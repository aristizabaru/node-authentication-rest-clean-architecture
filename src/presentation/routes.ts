import { Router } from "express";
import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.use('/api/auth', AuthRoutes.routes)
        router.use('/api/user', UserRoutes.routes)

        return router
    }
}