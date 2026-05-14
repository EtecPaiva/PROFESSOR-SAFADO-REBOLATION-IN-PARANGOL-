export class AppError extends Error {
  constructor({ message, reason = '', code = 500 }) {
    super(message);

    this.name = 'AppError';
    this.message = message;
    this.reason = reason;
    this.code = Number(code);

    Error.captureStackTrace(this, this.constructor);
  }
}

// código anterior não garantia que o erro seria enviado como numero.