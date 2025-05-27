import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3500;
export const ENV = process.env.ENV || "DEV";
// export const JWT_SECRET = process.env.JWT_SECRET || "123123";
