import './globals.css'
import Head from './head'
import './layout.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <Head />
      </head>
      <body>
        {/* <main className={s['main']}>
          <div className={s['mobile-view']}> */}
        <main className="main">
          <div className="mobile-view">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
