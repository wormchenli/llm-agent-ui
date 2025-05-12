import { getRequest } from "@/utils/axiosInstance";
import { NextResponse } from "next/server";
import { BASEURL } from "@/config";

export const GET = async () => {
  try {
    console.log(`${BASEURL}/ping`);

    const _data = await getRequest(`${BASEURL}/ping`, null);
    console.log(`${BASEURL}/ping`);
    return NextResponse.json(_data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
};
