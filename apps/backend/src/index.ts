import express from "express";
import cors from "cors";
import morgan from "morgan";
import { ENV, PORT } from "./config";
import { ok } from "./utils/sendResponse";
import { errorHandler } from "./middleware/errorHandler";
// import { prisma } from "./prismaClient";

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
app.use(cors(corsOptions));
app.use(express.json());

if (ENV === "DEV") app.use(morgan("dev"));

app.get("/", (req, res) => ok(res, { message: "Welcome to TodoApp API" }));

app.use(errorHandler);

app.listen(PORT, async () => {
  //   await prisma.$connect();
  //   console.log("Connected to db");
  if (ENV === "DEV") {
    console.log(`App is running on http://localhost:${PORT}`);
  }
});
