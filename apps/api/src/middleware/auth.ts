import type { ExpressHandler } from "../types/expressHandlers";
import { verifyToken } from "@repo/jwt/utils";
import { AppError } from "../utils/AppError";

export const protect: ExpressHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw AppError.unauthorized(
      "Please log in or create an account to get access",
      {
        token: "no authorization token found",
      }
    );
  }

  if (!authHeader.startsWith("Bearer ")) {
    throw AppError.badRequest(`Token must start with "Bearer "`, {
      token: "Invalid token format",
    });
  }

  const token = authHeader.split(" ")[1] as string;

  try {
    const decoded = verifyToken(token) as { id: number };
    req.userId = decoded.id;
    next();
  } catch (err) {
    throw AppError.unauthorized("You donot have access to this route", {
      token: "Invalid or expired",
    });
  }
};
