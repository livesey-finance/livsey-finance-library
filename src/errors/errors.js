export class LiveseyFinanceError extends Error {
  errors = [];

  constructor(message, errors = []) {
    super(message);
    this.errors = errors;
    Object.setPrototypeOf(this, LiveseyFinanceError.prototype);
  }

  static ZeroDivisionError(message, errors = []) {
    throw new LiveseyFinanceError(message, errors);
  }
}
