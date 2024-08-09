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

  const res = await apiInstance.post('/api/board/post', {
    name: formData.get('name'),
    content: formData.get('content')
  });
  return res;
};