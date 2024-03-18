import Header from '@/components/header/Header';
import s from './main.module.scss';
import Button from '@/components/button/Button';
import classNames from 'classnames';
import BottomMenu from '@/components/bottomMenu/BottomMenu';

export default function Home() {
  return (
    <div>
      <div className='content'>
      지도 등 내부 컨텐츠1111
      <br />
      </div>
      <BottomMenu />
    </div>
  )
}
