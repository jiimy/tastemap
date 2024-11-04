import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("query");

  const response = await axios.get(
    `https://openapi.naver.com/v1/search/image`,
    {
      params: {
        query: search,
        sore: "sim",
        filter: "large",
      },
      headers: {
        "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
        "X-Naver-Client-Secret": "7a4xvqlIgm",
      },
    }
  );

  const cleanData = JSON.parse(JSON.stringify(response.data));
  return NextResponse.json({
    cleanData,
    // response
  });
}