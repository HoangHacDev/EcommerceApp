import { HttpException, HttpStatus } from "@nestjs/common";

export class ObjectIdNotFoundException extends HttpException {
    constructor(private _id: string) {
        super(`${_id} not found`, HttpStatus.NOT_FOUND);
    }
}

export class ObjectIdValidException extends HttpException {
    constructor(private _id: string) {
        super(`${_id} not valid`, HttpStatus.BAD_REQUEST);
    }
}
