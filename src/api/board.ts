import { PutBlobResult } from "@vercel/blob";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 전체 게시글 가져오기
export async function getBoard() {
  try {
    const res = await axios.get("/api/board/get");
    // revalidatePath("/", "layout");
    console.log('api', res);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// NOTE: 테스트 코드
export async function getPet() {
  try {
    const res = await axios.get("/api/pets/get-pets");
    console.log("api", res);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// 게시글쓰기
export async function postBoard(formData: FormData) {
  const name = formData.get("name");
  const content = formData.get("content");
  const files = formData.getAll("file") as File[];

  const uploadedImages: string[] = [];

  if (files[0]?.name != "") {
    for (const file of files) {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

      const newBlob = (await response.json()) as PutBlobResult;
      uploadedImages.push(`${newBlob.url}`);
    }
  }

  console.log("uploadedImages: ", `{${uploadedImages}}`);
  const setConvert = `{${uploadedImages.toString()}}`;

  const res = await axios.post("/api/board/post", {
    name: name,
    content: content,
    imgUrls: setConvert,
  });

  if (res.status === 200) {
    revalidatePath("http://localhost:3000/articles");
    redirect("http://localhost:3000/articles");
  }
}

// [id] 게시글 가져오기
type getBoardType = {
  id: string;
};

// export async function getBoardId({ id }: getBoardType) {
export async function getBoardId(id:string) {
  try {
    const res = await axios.get(`/api/board/${id}`);
    // revalidatePath("/", "layout");
    return res.data.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
