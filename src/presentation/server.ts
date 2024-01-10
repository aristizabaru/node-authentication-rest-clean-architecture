import express, { Router } from 'express'

interface Options {
    port: number
    routes: Router
}

export class Server {
    public readonly app = express()
    private serverListener: any
    private readonly port?: number
    private readonly routes: Router

    constructor(options: Options) {
        const { port = 3000, routes } = options
        this.port = port
        this.routes = routes
    }

    async start() {

        // Middlewares

        // Routes
        this.app.use(this.routes)

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`)
        })
    }

    public close() {
        this.serverListener.close()
    }
}