import axios from "axios";
import { BACKEND_END_URL } from "./config";

export const apiClient = axios.create({
  baseURL: BACKEND_END_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
