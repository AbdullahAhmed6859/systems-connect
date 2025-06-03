import dotenv from "dotenv";
import { JWT_SECRET } from "./secret";
import jwt from "jsonwebtoken";
dotenv.config();

const ALGORITHM = "HS256";

export async function generateToken(payload: {
  [key: string]: any;
}): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { algorithm: ALGORITHM }, (err, token) => {
      if (err) reject(err);
      else resolve(token!);
    });
  });
}

export async function verifyToken(token: string): Promise<jwt.JwtPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      JWT_SECRET,
      { algorithms: [ALGORITHM] },
      (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded as jwt.JwtPayload);
      }
    );
  });
}
