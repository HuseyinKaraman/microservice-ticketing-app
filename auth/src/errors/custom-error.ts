export abstract class CustomError extends Error {
    abstract statusCode: number;   //* abstract property,method must be implemented in child classes

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string, field?: string }[]
}