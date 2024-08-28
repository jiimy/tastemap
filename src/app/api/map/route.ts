import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { lat, lon } = await request.json();

  try {
    const response = await axios.get(
      "https://openapi.naver.com/v1/search/local.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&sort=random",
      {
        params: {},
        headers: {
          "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
          "X-Naver-Client-Secret": "7a4xvqlIgm",
        },
      }
    );

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: request }, { status: 500 });
  }
}