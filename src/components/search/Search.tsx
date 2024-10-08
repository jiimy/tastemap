'use client';

import React, { useState } from 'react';
import { SearchIcon } from '../imgs';
import s from './search.module.scss';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('e', searchTerm);
    // getMapApi(searchTerm)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={s.search}>
      <form onSubmit={onSubmit}>
        <input type="search" className="search" value={searchTerm} onChange={handleChange} />
        <div>
          <SearchIcon height={28} width={28} onClick={(e: any) => {
            onSubmit(e);
          }} />
        </div>
      </form>
    </div>
  );
};

export default Search;