import { google } from "googleapis";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URI,
} from "../config";

export const GOOGLE_CLIENT_OPTIONS = {
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirectUri: GOOGLE_CALLBACK_URI,
};

export const GOOGLE_SHARED_CLIENT = new google.auth.OAuth2(
  GOOGLE_CLIENT_OPTIONS
);
