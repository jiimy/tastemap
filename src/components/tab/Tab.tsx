import classNames from 'classnames';
import React, { useState } from 'react';
import s from './tab.module.scss';

type tabType = {
  text: string;
  select?: boolean;
}

type tabProps = {
  tab: tabType[];
  selectTap: (index:number) =>  void;
}

const Tab = ({ tab, selectTap }: tabProps) => {
  const [selectTab, setSelectTab] = useState(0);

  return (
    <>
      {tab.map((tab, index) => (
        <div
          key={index}
          className={classNames([s.tab_nav], {
            [s.is_select]: selectTab === index
          })}
          onClick={() => {setSelectTab(index)
            selectTap(index)
          }}
        >
          {tab.text}
        </div>
      ))}
    </>
  );
};

export default Tab;