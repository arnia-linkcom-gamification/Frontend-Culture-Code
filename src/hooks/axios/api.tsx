import axios from "axios";
const accessToken = localStorage.getItem("access_token") || "";
export const api = axios.create({
  baseURL: "https://back-end-module-4.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
