import { BadRequestException, HttpStatus } from '@nestjs/common';

export function formatErrors(errors: any[]) {
    const errs = {};
    let upErrors = {};
    errors.forEach((err) => {
        errs[err.property] = errs[err.property] || [];
        const messages = [];
        for (let key in err.constraints) {
            messages.push(err.constraints[key]);
        }
        errs[err.property] = messages;
        upErrors = {
            errors: errs,
            statusCode: HttpStatus.BAD_REQUEST,
        };
    });
    return new BadRequestException(upErrors);
}