import React from 'react';

import { ReactComponent as SearchIcon } from '@Assets/search.svg';
import * as S from './styled';

import { SearchProps } from './Search';

export const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
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
