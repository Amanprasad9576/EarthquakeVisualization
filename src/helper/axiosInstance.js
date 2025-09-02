
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EARTHQUAKE_API_BASE,
});

export default axiosInstance;


