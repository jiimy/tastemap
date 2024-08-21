
import axios from 'axios';

export async function board() {
  try {
    const res = await axios.get('/api/board/get');
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}