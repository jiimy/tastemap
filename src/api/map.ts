import axios from "axios";

// 근처의 검색어 찾아주기
export async function searchMapApi(text: string) {
  console.log("kedms rkqt ", text);
  try {
    const res = await axios.get(`/api/map/${text}`);
    console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// 이하 지피티 테스트
export async function fetchNaverData(id: string) {
  try {
    const response = await axios.get(
      `https://openapi.naver.com/v1/search/local.json?sort=comment&display=1&query=${id}`,
      {
        headers: {
          "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
          "X-Naver-Client-Secret": "7a4xvqlIgm",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
