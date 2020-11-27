import axios from "axios";
import { BASEURL } from "./constants";

var axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
