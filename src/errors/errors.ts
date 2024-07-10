export class LiveseyFinanceError extends Error {
    errors: string[];

    constructor(message: string, errors = []) {
        super(message);
        this.errors = errors;
        Object.setPrototypeOf(this, LiveseyFinanceError.prototype);
    }

    static ZeroDivisionError(message: string, errors = []) {
        throw new LiveseyFinanceError(message, errors);
    }
}