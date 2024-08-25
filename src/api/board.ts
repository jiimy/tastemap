import { PutBlobResult } from "@vercel/blob";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 전체 게시글 가져오기
export async function getBoard() {
  try {
    const res = await axios.get("/api/board/get");
    // revalidatePath("/", "layout");
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
  console.log("받은 id", id);
  try {
    const res = await axios.get(`/api/board/${id}`);
    // revalidatePath("/", "layout");
    console.log("받은거", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
