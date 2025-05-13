import { getRequest } from "@/utils/serverAxiosInstance";
import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("GET triggered=====>");
  try {
    const _data = await getRequest(`/ping`, {
      name: "lichen",
      age: 25,
    });
    return NextResponse.json(_data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
};
