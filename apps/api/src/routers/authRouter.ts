import { Router } from "express";
import { googleRouter } from "./googleRouter";

const router = Router();

router.use("/google", googleRouter);

export { router as authRouter };
