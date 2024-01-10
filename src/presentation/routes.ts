import { Request, Response, Router } from "express";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.get('/app/test', (req: Request, res: Response) => {
            res.json('route working')
        })

        return router
    }
}