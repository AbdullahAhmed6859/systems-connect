import { Router } from "express";
import { googleRouter } from "./googleRouter";
import { catchAsync } from "../utils/catchAsync";
import { ok } from "../utils/sendResponse";
import { protect } from "../middleware/auth";

const router = Router();

router.use("/google", googleRouter);

router.get(
  "/cookie-data",
  protect,
  catchAsync(async (req, res, next) => {
    return ok(res, { data: { user: req.user } });
  })
);

router.get(
  "/logout",
  protect,
  catchAsync(async (req, res, next) => {
    res.clearCookie("accessToken");
    ok(res, { message: "You have been logged out successfully" });
  })
);

export { router as authRouter };
