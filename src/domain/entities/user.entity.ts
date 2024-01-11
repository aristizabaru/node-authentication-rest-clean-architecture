export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public rol: string[],
        public img?: string,
    ) { }

}