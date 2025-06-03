import { verifyToken } from "@repo/jwt/utils";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";

export interface UserPayload {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture?: string;
  iat: number;
  exp?: number; // optional, may not exist if no expiresIn used
}

export const protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    throw AppError.badRequest("No token found", { token: "No token found" });

  const decoded = (await verifyToken(token)) as UserPayload;
  req.user = decoded;
  next();
});
