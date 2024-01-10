import { envs } from "./config"
import { AppRoutes, Server } from "./presentation"

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
