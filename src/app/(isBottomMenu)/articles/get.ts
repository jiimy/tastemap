
import { sql } from '@vercel/postgres';

export default async function board() {
  const { rows } = await sql`SELECT * from PETS`;

  return rows;
}