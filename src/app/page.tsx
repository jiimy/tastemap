import Header from '@/components/header/Header';
import s from './main.module.scss';

export default function Home() {

  return (
    <main className={s['main']}>
      <div className={s['mobile-view']}>
        모바일용
        <Header />
        클릭
      </div>
    </main>
  )
}
