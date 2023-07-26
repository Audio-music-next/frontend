import axios from "axios";
import "dotenv/config";

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 6000,
  headers: { "X-Custom-Header": "foobar" },
});
