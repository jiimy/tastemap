import axios from "axios";

// 근처의 검색어 찾아주기
export async function searchMapApi(text: string) {
  console.log('kedms rkqt ', text);
  try {
    const res = await axios.get(
      `https://openapi.naver.com/v1/search/local.json`,
      {
        params: {
          sort: "comment",
          display: 10,
          query: text,
        },
        headers: {
          "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
          "X-Naver-Client-Secret": "7a4xvqlIgm",
        },
      }
    );
    // revalidatePath("/", "layout");
    console.log('res', res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}