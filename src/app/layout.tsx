import AuthContext from '@/context/AuthContext';
import './globals.css'
import Head from './head'
import './layout.scss';
import QueryProviders from './provider/queryProvider';
import Location from '@/components/location/Location';

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
            <main className="main">
              <div className="mobile-view">
                <div>
                  {children}
                </div>
              </div>
            </main>
            <Location />
          </AuthContext>
        </QueryProviders>
        <div id="modal" />
      </body>
    </html>
  )
}
