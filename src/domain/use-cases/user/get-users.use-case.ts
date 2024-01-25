import { UserRepository } from "../../repositories"

interface User {
    id: string
    name: string
    email: string
}

interface GetUsersUseCase {
    execute(): Promise<User[]>
}

export class GetUsers implements GetUsersUseCase {

    constructor(
        private readonly userRepository: UserRepository,
    ) { }

    async execute(): Promise<User[]> {

        const usersEntities = await this.userRepository.getUsers()
        const users = usersEntities.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

        return users
    }

}
