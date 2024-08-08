import AuthContext from '@/context/AuthContext';
import './globals.css'
import Head from './head'
import './layout.scss';
import QueryProviders from './provider/queryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <QueryProviders>
          <AuthContext>
            {/* <main className={s['main']}>
          <div className={s['mobile-view']}> */}
            <main className="main">
              <div className="mobile-view">
                {children}
              </div>
            </main>
          </AuthContext>
        </QueryProviders>
        <div id="modal" />
      </body>
    </html>
  )
}
