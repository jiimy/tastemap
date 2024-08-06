'use client'
import ErrorBoundary from '@/components/error/ErrorBoundary';
import ErrorHandlingWrapper from '@/components/error/ErrorHandlingWrapper';
import { useQuery } from '@tanstack/react-query';
import ErrorFallback from './ErrorFallback';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Posts = () => {
  // const { data, error, isError, isLoading } = useQuery(['posts'], fetchPosts);
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
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
      {data.map((post: any) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const Loading = () => {
  return <div>로딩중</div>
}

const Index = () => {
  return (
    <ErrorHandlingWrapper
      fallbackComponent={ErrorFallback}
      suspenseFallback={<Loading />}
    >
      ddd
    </ErrorHandlingWrapper>
  );
};

export default Index;