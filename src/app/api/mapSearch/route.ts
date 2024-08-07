// import apiInstance from "@/util/useInterceptor";
// import axios from "axios";

// type mapType = {
//   search?: any;
// }

// // 지도 검색
// export async function GET({ search }: mapType) {
//   const res = await axios.get(`https://openapi.naver.com/v1/search/local.xml?query=${search}&display=10&start=1&sort=random`, {
//     headers: {
//       'X-Naver-Client-Id': `${process.env.NEXT_PUBLIC_SEARCH_CLIENT_ID}`, 'X-Naver-Client-Secret': `${process.env.NEXT_PUBLIC_SEARCH_CLIENT_SECRET}`,
//     }
//   })
//   return res;
// }