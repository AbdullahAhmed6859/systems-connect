import { verifyToken } from "@repo/jwt/utils";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import { TokenData } from "@repo/zod-schemas/user";

export const protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    throw AppError.unauthorized("No token found", { token: "No token found" });

  const decoded = (await verifyToken(token)) as TokenData;
  req.user = decoded;
  next();
});
