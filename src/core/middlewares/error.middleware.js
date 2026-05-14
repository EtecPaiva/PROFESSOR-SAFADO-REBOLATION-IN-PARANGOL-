import * as responses from '../utils/responses.js';
import { logError } from '../utils/logger.js';

export const errorMiddleware = (error, req, res, next) => {
  const status = Number(error.code) || 500;

  const message = error.message || 'Erro interno do servidor';

  const details = error.reason || error.stack || '';

  logError({
    error,
    req,
    status,
    message
  });

  switch (status) {
    case 400:
      return responses.badRequest(res, {
        message,
        details
      });

    case 401:
      return responses.unauthorized(res, {
        message,
        details
      });

    case 403:
      return responses.forbidden(res, {
        message,
        details
      });

    case 404:
      return responses.notFound(res, {
        message,
        details
      });

    case 409:
      return responses.conflict(res, {
        message,
        details
      });

    case 498:
      return responses.invalidToken(res, {
        message,
        details
      });

    default:
      return responses.error(res, {
        status,
        message,
        details
      });
  }
};

// code podia vir como string, Não havia padronização do campo técnico.