"use client";

import { useState } from "react";
// import { getRequest } from "@/utils/axiosInstance";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const handleClick = async () => {
    const res = await fetch("/api/testAPI");
    const json = await res.json();
    setData(json.data);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>{data}</p>
    </>
  );
}
