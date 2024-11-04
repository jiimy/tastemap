import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    const { rows } = await sql`select * from board`;
    console.log("sql", rows);
    // const result = await sql`select * from Board`;
    // console.log("sql", result);
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}