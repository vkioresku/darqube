import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { selectBookmarks } from './bookmarksSlice';

import * as S from './styled';

export const Bookmarks = () => {
  const { bookmarks } = useSelector(selectBookmarks);

  return (
    <S.Bookmarks>
      {/* {bookmarks.map(
        ({ datetime, headline, id, image, related, summary, url }) => (
          <Card />
        ),
      )} */}
    </S.Bookmarks>
  );
};
