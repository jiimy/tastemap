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
  console.log('클릭', formData.getAll('file'), formData.getAll('file')[0]);

  const name = formData.get('name');
  const content = formData.get('content');
  const files = formData.getAll('file') as File[];

  try {
    const uploadedImages: string[] = [];

    for (const file of files) {
      if (file.name != '') {
        const response = await fetch(
          `/api/upload?filename=${file.name}`,
          {
            method: 'POST',
            body: file,
          }
        );

        const newBlob = (await response.json()) as PutBlobResult;
        uploadedImages.push(`'${newBlob.url}'`);
      }
    }

    const first = (formData.getAll('file')[0] as File)?.name;
    const setConvert = first !== '' ? `{${uploadedImages.toString()}}` : null;
    console.log('cc', setConvert);

    const res = await apiInstance.post('/api/board/post', {
      name,
      content,
      setConvert
    });
    console.log('dd', res.status, name, content, setConvert);

    if (res.status === 200) {
      redirect('http://localhost:3000/articles');
    }
  } catch (error) {
    console.log('error', error);
  }
}