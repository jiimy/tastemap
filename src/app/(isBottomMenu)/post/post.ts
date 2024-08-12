'use server';
import apiInstance from "@/util/useInterceptor";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

interface postType {
  userName: string;
  content: string;
}

export async function post(formData: FormData) {
  console.log('클릭', formData.get('content'));

  const petName = "펫네임1";
  // const content = formData.get('content');
  const ownerName = '오너네임1';

  try {
    // const res = await fetch('http://localhost:3000/api/board/post', {
    const res = await fetch('http://localhost:3000/api/pets/add-pets', {
      method: 'POST',
      body: JSON.stringify({ petName, ownerName }),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(res)
    if (res.ok) {
      console.log("Yeai!")
    } else {
      console.log("Oops! Something is wrong.")
    }
  } catch (error) {
    console.log(error)
  }

  // const res = await apiInstance.post('/api/board/post', {
  //   name: formData.get('name'),
  //   content: formData.get('content')
  // });
  // return res;
  // const name = formData.get('name');
  // const name = "경";
  // const content = formData.get('content');

  // const response = await fetch('/api/board/post', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ name, content }),
  // });

  // if (response.ok) {
  //   const data = await response.json();
  //   console.log('Response data:', data);
  // } else {
  //   console.error('Failed to submit pet data:', response.statusText);
  // }
};