import dotenv from "dotenv";
import { JWT_SECRET } from "./secret";
import jwt from "jsonwebtoken";
dotenv.config();

export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET) as string;
}

export function verifyToken(token: string): jwt.JwtPayload {
  return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
}
