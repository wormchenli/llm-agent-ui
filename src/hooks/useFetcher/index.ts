import { useState } from "react";
import { IRequestOptions, IResponse } from "@/patterns/interfaces";
import { REQUEST_TIMEOUT } from "@/config";

export function useFetcher() {
  //
  const [responseData, setResponseData] = useState<IResponse | null>(null);

  const baseOptions: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    redirect: "follow",
  };

  /**
   * Updates the `responseData` state. The default HTTP method is GET, with other defaults defined in `baseOptions`.
   *
   * @param {string} url - The Next.js API route URL.
   * @param {IRequestOptions} reqOptions - (Optional) Request options:
   *   - `params`: Query parameters for GET requests.
   *   - `options`: Additional fetch options (e.g., headers, method). Type of `IRequestOptions`, `body` is omitted.
   *   - `body`: Request body, an object.
   */
  function fetchData(url: string, reqOptions: IRequestOptions = {}) {
    let requestUrl = url;
    const { params, options, body } = reqOptions;

    const fetchOptions: RequestInit = {
      ...baseOptions,
      ...options,
    };

    if (fetchOptions.method === "GET" && params) {
      requestUrl +=
        "?" +
        Object.keys(params)
          .map((k) => `${k}=${encodeURIComponent(params[k])}`)
          .join("&");
    } else if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    Promise.race([
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("Request time out"));
        }, REQUEST_TIMEOUT);
      }),
      fetch(requestUrl, fetchOptions).then((res) =>
        res
          .json()
          .then((data) => setResponseData(data))
          .catch((err) => {
            console.error("Fetch error:", err);
            setResponseData(null);
          }),
      ),
    ]).catch((err) => console.error("Fetch error:", err));
  }

  return { responseData, fetchData };
}
