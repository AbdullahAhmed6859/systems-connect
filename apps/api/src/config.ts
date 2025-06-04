import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3500;
export const ENV = process.env.ENV || "DEV";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
export const GOOGLE_CALLBACK_URI = process.env.GOOGLE_CALLBACK_URI!;
export const FRONT_END_URL =
  process.env.FRONT_END_URL || "http://localhost:3000";
