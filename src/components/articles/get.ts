
import axios from 'axios';
import { revalidatePath } from 'next/cache';

export async function board() {
  try {
    const res = await axios.get('/api/board/get');
    // revalidatePath("/", "layout");
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}