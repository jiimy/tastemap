import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, content, imgUrls } = await request.json();

    if (!name || !content) {
      throw new Error('name and content are required');
    }

    await sql`INSERT INTO board (name, content, imgUrls) VALUES (${name}, ${content} ${imgUrls});`;
    return NextResponse.redirect(new URL("http://localhost:3000/articles", request.url), 303);
    // const board = await sql`SELECT * FROM board;`;
    // return NextResponse.json({ board }, { status: 200 }) ;
  } catch (error) {
    return NextResponse.json({ error: request }, { status: 500 });
  }

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