// apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
