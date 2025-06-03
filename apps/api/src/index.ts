import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ENV, PORT } from "./config";
import { ok } from "./utils/sendResponse";
import { errorHandler } from "./middleware/errorHandler";
import { prisma } from "@repo/db/client";
import cookieParser from "cookie-parser";
import { authRouter } from "./routers/authRouter";
import { protect } from "./middleware/auth";

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  // @ts-ignore
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const app = express();

// midlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

if (ENV === "DEV") app.use(morgan("dev"));

// routers
app.use("/auth", authRouter);

app.get("/", protect, (req, res) =>
  ok(res, { message: "Welcome to backend API" })
);

app.use(errorHandler);

app.listen(PORT, async () => {
  await prisma.$connect();
  console.log("Connected to db");
  if (ENV === "DEV") {
    console.log(`App is running on http://localhost:${PORT}`);
  }
});
