import apiInstance from "@/util/useInterceptor";
import { PutBlobResult } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

interface postType {
  userName: string;
  content: string;
}

export async function post(formData: FormData) {
  console.log('클릭', (formData.get('file') as File)?.name);

  const name = formData.get('name');
  const content = formData.get('content');
  const files = formData.getAll('file') as File[];

  try {
    const uploadedImages: string[] = [];

    for (const file of files) {
      const response = await fetch(
        `/api/upload?filename=${file.name}`,
        {
          method: 'POST',
          body: file,
        }
      );

      const newBlob = (await response.json()) as PutBlobResult;
      uploadedImages.push(newBlob.url); 
    }

    const res = await apiInstance.post('/api/board/post', {
      name,
      content,
      imgUrls: uploadedImages,
    });

    if (res.status === 200) {
      redirect('http://localhost:3000/articles');
    }
  } catch (error) {
    console.log('error', error);
  }
}