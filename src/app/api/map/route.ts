import { fetchNaverData } from "@/api/map";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { text: string } }
) {
  const { text } = params;

  console.log("api ", text);

  const text1 = "다이소";

  try {
    // const response = await axios.get(
    //   `https://openapi.naver.com/v1/search/local.json?sort=comment&display=1`,
    //   {
    //     params: {
    //       query: text1
    //     },
    //     headers: {
    //       "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
    //       "X-Naver-Client-Secret": "7a4xvqlIgm",
    //     },
    //   }
    // );
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/local.json",
      {
        params: { text1 },
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID || "",
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET || "",
        },
      }
    );

    // const response = await fetchNaverData(text);

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: request }, { status: 500 });
  }
}
