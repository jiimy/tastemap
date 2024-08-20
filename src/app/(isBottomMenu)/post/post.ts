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
  const name = formData.get('name');
  const content = formData.get('content');
  const files = formData.getAll('file') as File[];

  const uploadedImages: string[] = [];

  if (files[0]?.name != '') {
    for (const file of files) {
      const response = await fetch(
        `/api/upload?filename=${file.name}`,
        {
          method: 'POST',
          body: file,
        }
      );

      const newBlob = (await response.json()) as PutBlobResult;
      uploadedImages.push(`${newBlob.url}`);
    }
  }

  console.log('uploadedImages: ', `{${uploadedImages}}`);
  const setConvert = `{${uploadedImages.toString()}}`;

  const res = await axios.post('/api/board/post', {
    name: name,
    content: content,
    imgUrls: setConvert
  });

  if (res.status === 200) {
    redirect('http://localhost:3000/articles');
  }
}