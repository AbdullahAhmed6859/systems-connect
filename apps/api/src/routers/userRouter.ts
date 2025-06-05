import { Router } from "express";
import { catchAsync } from "../utils/catchAsync";
import { protect } from "../middleware/auth";
import { prisma } from "@repo/db/client";
import { ok } from "../utils/sendResponse";
import { userIdParams } from "@repo/zod-schemas/user";
import { AppError } from "../utils/AppError";

const getMe = catchAsync(async (req, res, next) => {
  req.params.userId = String(req.user?.id);
  next();
});

const getUser = catchAsync(async (req, res, next) => {
  const { userId } = userIdParams.parse(req.params);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      bio: true,
      _count: {
        select: { followers: true, following: true, posts: true },
      },
    },
  });
  if (!user) {
    throw AppError.notFound(
      `User with userId: "${userId}", could not be found`
    );
  }
  return ok(res, { data: user });
});

const router = Router();

router.get("/me", protect, getMe, getUser);

router.get("/:userId", protect, getUser);

export { router as userRouter };
