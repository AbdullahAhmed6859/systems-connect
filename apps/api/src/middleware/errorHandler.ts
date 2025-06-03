import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import {
  badRequest,
  sendResponse,
  serverError,
  unauthorized,
  zodErrorBadRequest,
} from "../utils/sendResponse";
import { AppError } from "../utils/AppError";
import { ENV } from "../config";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "@repo/jwt/types";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle Zod validation errors
  if (err instanceof ZodError) {
    return zodErrorBadRequest(res, err);
  }

  // Handle known AppErrors
  if (err instanceof AppError) {
    return sendResponse(res, err.statusCode, {
      message: err.message,
      errors: err.errors ?? null,
    });
  }

  // JWT errors
  if (err instanceof TokenExpiredError) {
    return unauthorized(res, {
      errors: { token: "expired" },
      message: "Your session has expired. Please login again.",
    });
  }

  if (err instanceof NotBeforeError) {
    return unauthorized(res, {
      errors: { token: "inActive" },
      message: "Token is not active yet.",
    });
  }

  if (err instanceof JsonWebTokenError) {
    return badRequest(res, {
      errors: { token: "Invalid token" },
      message: "Token is malformed or invalid.",
    });
  }

  console.error(err);
  // Handle generic errors
  if (err instanceof Error) {
    return serverError(
      res,
      ENV === "PROD" ? "Internal server error" : err.message
    );
  }

  // Catch-all fallback
  return serverError(res);
};
