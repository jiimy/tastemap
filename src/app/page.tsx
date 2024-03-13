import Header from '@/components/header/Header';
import s from './main.module.scss';
import Button from '@/components/button/Button';
import classNames from 'classnames';
import BottomMenu from '@/components/bottomMenu/BottomMenu';

export default function Home() {

  return (
    <main className={s['main']}>
      <div className={s['mobile-view']}>
        <div className={s.content}>
          <h2></h2>

        </div>
        <BottomMenu/>
      </div>
    </main>
  )
}
