import { BASEURL, REQUEST_TIMEOUT } from "@/config";
import { IRequestOptions } from "@/patterns/interfaces";

import axios from "axios";

const serverAxiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function getRequest(
  url: string,
  params: IRequestOptions["params"] = null,
) {
  const serverURL = `${BASEURL}${url}`;
  return await serverAxiosInstance
    .get(serverURL, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("GET request error:", error);
      throw error;
    });
}
