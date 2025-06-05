import "express";
import { TokenData } from "@repo/zod-schemas/user";
declare global {
  namespace Express {
    interface Request {
      user?: TokenData;
    }
  }
}
