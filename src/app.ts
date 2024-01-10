import { envs } from "./config/env.adapter"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"

(async () => {
    await main()
})()

async function main() {

    // TODO: Await de base de datos

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    })
    server.start()
}
