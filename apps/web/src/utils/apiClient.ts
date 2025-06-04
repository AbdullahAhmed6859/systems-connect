import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3500",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
