import Header from '@/components/header/Header';
import s from './main.module.scss';
import Button from '@/components/button/Button';
import { TestLogo } from '@/components/imgs';

export default function Home() {

  return (
    <main className={s['main']}>
      <div className={s['mobile-view']}>
        모바일용
        <Header />
        클릭
        <Button>
          <TestLogo/>
          버튼명
        </Button>
        <Button>
          버튼 한개
        </Button>
      </div>
    </main>
  )
}
