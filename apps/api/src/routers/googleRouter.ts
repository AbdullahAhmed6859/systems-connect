import { Router } from "express";
import {
  GOOGLE_CLIENT_OPTIONS,
  GOOGLE_SHARED_CLIENT,
} from "../utils/googleOAuth";
import { google } from "googleapis";
import { generateToken } from "@repo/jwt/utils";
import { catchAsync } from "../utils/catchAsync";
import { callbackQuerySchema } from "@repo/zod-schemas/googleOAuth";

const router = Router();

router.get("/", function (req, res, next) {
  const redirectTo =
    (req.query.redirect_to as string) ||
    req.get("Referrer") ||
    "http://localhost:3000";

  const url = GOOGLE_SHARED_CLIENT.generateAuthUrl({
    scope: ["openid", "profile", "email"],
    access_type: "online",
    prompt: "consent",
    state: encodeURIComponent(redirectTo),
  });
  res.redirect(url);
});

router.get(
  "/callback",
  catchAsync(async (req, res, next) => {
    const { state, code } = callbackQuerySchema.parse(req.query);

    const googleOAuthClient = new google.auth.OAuth2(GOOGLE_CLIENT_OPTIONS);
    const { tokens } = await googleOAuthClient.getToken(code);
    googleOAuthClient.setCredentials(tokens);

    const oauth2 = google.oauth2({ version: "v2", auth: googleOAuthClient });
    const { data: googleUser } = await oauth2.userinfo.get();

    console.log(googleUser);

    const userPayload = {
      id: googleUser.id,
      email: googleUser.email,
      firstName: googleUser.given_name,
      lastName: googleUser.family_name,
      picture: googleUser.picture,
    };

    const jwtToken = await generateToken(userPayload);

    res.cookie("accessToken", jwtToken, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "lax",
      //   maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    });

    const redirectUrl = state
      ? decodeURIComponent(state)
      : "http://localhost:3000";

    res.redirect(redirectUrl); // nextjs app
  })
);

export { router as googleRouter };
