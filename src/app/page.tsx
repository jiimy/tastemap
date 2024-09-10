'use client';

import Header from '@/components/header/Header';
// import Button from '@/components/button/Button';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Sheet from '@/components/home/sheet/Sheet';
import Map from '@/components/map/Map';
import { LocateStateStore } from '@/store/locate';

export default function Home() {
  const { locate, address } = LocateStateStore();
  console.log('cc', locate, address)

  return (
    <div>
      <div className='content'>
        <Header theme='search' />
        <Map />
        {address &&
          <Sheet />
        }
      </div>
      <BottomMenu />
    </div>
  )
}
