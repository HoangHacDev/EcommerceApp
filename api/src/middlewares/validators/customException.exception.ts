import { HttpException, HttpStatus } from "@nestjs/common";

export class ObjectIdNotFoundException extends HttpException {
    constructor(private _id: string, value: string) {
        super(`${value} with id : ${_id} not found !`, HttpStatus.NOT_FOUND);
    }
}

export class ObjectIdValidException extends HttpException {
    constructor(private _id: string, value: string) {
        super(`${value} with id : ${_id} not valid !`, HttpStatus.BAD_REQUEST);
    }
}

export class EmailExistException extends HttpException {
    constructor(private email: string) {
        super(`user with email : ${email} already exist !`, HttpStatus.BAD_REQUEST);
    }
}

export class UsernameExistException extends HttpException {
    constructor(private username: string) {
        super(`user with username : ${username} already exist !`, HttpStatus.BAD_REQUEST);
    }
}
