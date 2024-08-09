import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // 요청한 데이터가 존재하지 않는다면 404 에러 반환
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  }

  if (!body.id) {
    return NextResponse.json({ error: "Id is required" }, { status: 404 });
  }

  try {
    // await sql`INSERT INTO Board (name, content) VALUES (${body.name}, ${body.content});`;
    await sql`INSERT INTO Board (username, content) VALUES ('경', '111');`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // 그렇지 않다면 전달 객체를 응답 객체로 반환
  const board = await sql`SELECT * FROM board`
  return NextResponse.json({ board }, { status: 200 });
} 1