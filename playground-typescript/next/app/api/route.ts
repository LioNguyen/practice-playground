import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ status: "success", data: [] });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
};
