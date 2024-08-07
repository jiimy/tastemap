'use client'
import ErrorBoundary from '@/components/error/ErrorBoundary';
import ErrorHandlingWrapper from '@/components/error/ErrorHandlingWrapper';
import { QueryErrorResetBoundary, useQuery } from '@tanstack/react-query';
import ErrorFallback from './ErrorFallback';
import Button from '@/components/button/Button';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const fetchWithError = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Posts = () => {
  // const { data, error, isError, isLoading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: fetchPosts
  // });

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['errorTest'],
    queryFn: fetchWithError
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      테스트페이지
      {/* {data.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))} */}
      <div>
        <h1>Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

const Loading = () => {
  return <div>로딩중</div>
}

const Index = () => {
  return (
    <>
      <QueryErrorResetBoundary>에러바운더리</QueryErrorResetBoundary>
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <Posts />
      </ErrorHandlingWrapper>
      <Button>asdfasdf</Button>
    </>
  );
};

export default Index;