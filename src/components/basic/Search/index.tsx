import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import * as S from './styled';

export const Search = () => {
  const [search, setSearch] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <S.Search>
      <SearchIcon className="search-icon" fill="#000" />
      <input
        value={search}
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="search-input"
      />
    </S.Search>
  );
};
