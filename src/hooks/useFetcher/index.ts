import { useState } from "react";
import { BodyInit } from "undici-types";
import { IResponse } from "@/patterns/interfaces";

export function useFetcher() {
  //
  const [responseData, setResponseData] = useState<IResponse | null>(null);

  function fetchData(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    params?: Record<string, unknown> | null,
    body?: BodyInit | Record<string, unknown> | null,
  ) {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params,
      data: body,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setResponseData(null);
      });
  }

  return { responseData, fetchData };
}
