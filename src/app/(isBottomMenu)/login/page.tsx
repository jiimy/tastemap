'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const Index = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      redirect('/');
    }
  }, [session])

  return (
    <div>
      <button onClick={() => signIn('google')}>구글 로그인</button>
      <Link href="/api/auth/signin">Google Login</Link>
    </div>
  );
};

export default Index;