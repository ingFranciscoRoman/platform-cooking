import axios from "axios";

export const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000,
  headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
});
