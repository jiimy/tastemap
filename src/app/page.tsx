import Header from '@/components/header/Header';
import s from './main.module.scss';
import Button from '@/components/button/Button';
import classNames from 'classnames';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Location from '@/components/location/Location';
import Sheet from '@/components/home/sheet/Sheet';

export default function Home() {
  return (
    <div>
      <div className='content'>
        <Header theme='search' />
        지도 등 내부 컨텐츠1111
        <br />
        <Sheet />
      </div>
      <BottomMenu />
      {/* <Location /> */}
    </div>
  )
}
