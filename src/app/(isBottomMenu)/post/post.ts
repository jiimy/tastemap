import apiInstance from "@/util/useInterceptor";
import { sql } from "@vercel/postgres";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

interface postType {
  userName: string;
  content: string;
}

export async function post(formData: FormData) {
  console.log('클릭', formData.get('content'));

  const name = formData.get('name');
  const content = formData.get('content');

  // try {
  const res = await axios.post('http://localhost:3000/api/board/post', {
    // const res = await apiInstance.post('/api/board/post', {
    name,
    content
  });

  console.log('res: ', res);

  if (res.status === 200) {
    // revalidatePath('http://localhost:3000/articles');
    redirect('http://localhost:3000/articles');
  }
  // } catch (error) {
  //   console.log(error);
  // }
}

// try {
//   const res = await fetch('http://localhost:3000/api/board/post', {
//     method: 'POST',
//     body: JSON.stringify({ name, content }),
//     headers: {
//       'content-type': 'application/json'
//     }
//   })
//   console.log(res)
//   if (res.ok) {
//     console.log("Yeai!")
//     revalidatePath('/post');
//   } else {
//     console.log("Oops! Something is wrong.")
//   }
// } catch (error) {
//   console.log(error)
// }