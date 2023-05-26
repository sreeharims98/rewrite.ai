import axios from "axios";
import { BASE_URL } from ".";

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create axios instance
const axiosInstance = axios.create(defaultOptions);
export default axiosInstance;
