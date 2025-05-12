import { BASEURL, REQUEST_TIMEOUT } from "@/config";

import axios from "axios";

interface IRequestOptions {
  params?: Record<string, any> | null;
  body?: Record<string, any> | null;
}

const axiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function getRequest(url: string, params: Record<string, any> | null) {
  return axiosInstance
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("GET request error:", error);
      throw error;
    });
}
