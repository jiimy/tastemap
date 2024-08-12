import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, content } = await request.json();
    console.log('서버 액션 : ', request, name, content);

    if (!name || !content) {
      throw new Error('Pet and owner names are required');
    }

    await sql`INSERT INTO board (name, content) VALUES (${name}, ${content});`;
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }

  const board = await sql`SELECT * FROM board;`;
  return NextResponse.json({ board }, { status: 200 });
}


// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get('name');
//   const content = searchParams.get('content');

//   try {
//     if (!name || !content) throw new Error('Pet and owner names required');
//     await sql`INSERT INTO board (name, content) VALUES (${name}, ${content});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const board = await sql`SELECT * FROM board;`;
//   return NextResponse.json({ board }, { status: 200 });
// }