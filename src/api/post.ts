import apiInstance from "@/util/useInterceptor";

// 글 목록 가져오기 - read

// 유저가 글 작성 - create
export async function postPostApi() {
  try {
    const res = await apiInstance.get("/api/main", {});
    return res;
  } catch (error) {
    throw error;
  }
}

// 유저가 글 수정 - update

// 유저가 글 삭제 - delete

