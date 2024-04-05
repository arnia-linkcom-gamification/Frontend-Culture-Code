import axios from "axios";
const accessToken = localStorage.getItem("access_token") || "";
export const api = axios.create({
  baseURL: "https://api-gamification.onrender.com/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
