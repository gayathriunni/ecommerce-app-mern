import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.model === "development" ? "https://localhost:5000/api" : "/api",
    withCredentials:true,
})

export default axiosInstance;