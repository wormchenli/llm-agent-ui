"use client";
// import { useState } from "react";
import { useFetcher } from "@/hooks/useFetcher";

export default function Home() {
  const { responseData, fetchData } = useFetcher();

  const handleClick = () => {
    fetchData("/api/testAPI", "GET");
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      {responseData?.data && <p>{responseData.data?.respond}</p>}
    </>
  );
}
