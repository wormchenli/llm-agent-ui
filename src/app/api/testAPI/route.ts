import { getRequest, postRequest } from "@/utils/serverAxiosInstance";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const _data = await getRequest("/ping", {
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

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const _data = await postRequest("/completion", data);
    return NextResponse.json(_data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
};
