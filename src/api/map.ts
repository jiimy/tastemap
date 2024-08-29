import axios from "axios";

// 근처의 검색어 찾아주기
export async function searchMapApi(text: string) {
  console.log('kedms rkqt ', text);
  try {
    const res = await axios.get(`/api/map/${text}`);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


// 이하 지피티 테스트
const API_URL = "https://openapi.naver.com/v1/search/local.json";

export const fetchNaverData = async (query: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query: query,
        sort: "comment",
        display: 10,
      },
      headers: {
        "X-Naver-Client-Id": "yDj1zz6s7PIruaIuI3kU",
        "X-Naver-Client-Secret": "7a4xvqlIgm",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};