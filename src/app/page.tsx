import Header from '@/components/header/Header';
import s from './main.module.scss';
// import Button from '@/components/button/Button';
import classNames from 'classnames';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Location from '@/components/location/Location';
import Sheet from '@/components/home/sheet/Sheet';
import Map from '@/components/map/Map';
import { Button } from 'snow-white-ui';

export default function Home() {
  return (
    <div>
      <div className='content'>
        <Header theme='search' />
        <Map />
        <Sheet />
        <Button >111</Button>
      </div>
      <BottomMenu />
      <Location />
    </div>
  )
}
