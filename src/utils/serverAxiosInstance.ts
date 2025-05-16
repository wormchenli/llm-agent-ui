import { BASEURL, REQUEST_TIMEOUT } from "@/config";
import { IRequestOptions } from "@/patterns/interfaces";

import axios from "axios";

const serverAxiosInstance = axios.create({
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

export async function postRequest(url: string, body: object) {
  const serverURL = `${BASEURL}${url}`;
  return await serverAxiosInstance
    .post(serverURL, body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("POST request error:", error);
      throw error;
    });
}
