import { fetchNaverData } from "@/api/map";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import CircularJSON from 'circular-json';

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
export async function GET(request: Request) {
  // const { id } = params;
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");

  const text1 = "신림동 다이소";
  const response = await axios.get(
    `https://openapi.naver.com/v1/search/local.json`,
    {
      params: {
        sort: "comment",
        display: 10,
        query: text1,
      },
      headers: {
        "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
        "X-Naver-Client-Secret": "7a4xvqlIgm",
      },
    }
  );

  // try {
  //   const response = await axios.get(
  //     `https://openapi.naver.com/v1/search/local.json?sort=comment&display=1`,
  //     {
  //       params: {
  //         query: text1
  //       },
  //       headers: {
  //         "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
  //         "X-Naver-Client-Secret": "7a4xvqlIgm",
  //       },
  //     }
  //   );
  // const response = await axios.get(
  //   "https://openapi.naver.com/v1/search/local.json",
  //   {
  //     params: { text1 },
  //     headers: {
  //       "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID || "",
  //       "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET || "",
  //     },
  //   }
  // );
  const jsonString = CircularJSON.stringify(response);
  const cleanData = JSON.parse(JSON.stringify(response.data));
  return NextResponse.json({
    cleanData,
  });

  // const response = await fetchNaverData(text);
  // return NextResponse.json({ response }, { status: 200 });
  // } catch (error) {
  //   NextResponse.json({ error: request }, { status: 500 });
  // }
}
