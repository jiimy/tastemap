import React from 'react';
import AlarmItem from './AlarmItem';

const AlarmList = () => {
  return (
    <div>
      <AlarmItem type='all' />
      <AlarmItem type='mention' />
    </div>
  );
};

export default AlarmList;