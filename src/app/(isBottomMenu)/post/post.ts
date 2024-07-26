interface postType {
  userName: string;
  content: string;
}

export async function post(formData: FormData) {
  console.log('클릭', formData.get('content'));
} 