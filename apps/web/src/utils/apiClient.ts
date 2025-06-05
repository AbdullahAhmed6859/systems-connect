import axios from "axios";
import { BACKEND_URL } from "./config";

export const apiClient = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
