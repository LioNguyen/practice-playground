import { NextRequest, NextResponse } from "next/server";

export const GET = (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const { id } = params;
    return NextResponse.json({ status: "success", id });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
};
