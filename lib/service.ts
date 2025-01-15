import axios from "axios";

export const service = axios.create({
  baseURL: "https://api.spoonacular.com",
  timeout: 1000,
  headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
});
