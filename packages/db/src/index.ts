import { PrismaClient } from "@prisma/client";

const DATABASE_URL = process.env.DATABASE_URL || "";
if (DATABASE_URL === "") console.error("NO DATABASE URL Provided");

export const prisma = new PrismaClient();
