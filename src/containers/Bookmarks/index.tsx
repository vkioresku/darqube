import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import date from 'date-and-time';

import { News } from '@Types';
import { Card } from '@Components';
import { selectBookmarks, removeBookmarkById } from './bookmarksSlice';

import * as S from './styled';

import { BookmarksProps } from './Bookmarks';

export const Bookmarks: React.FC<BookmarksProps> = ({ searchInput }) => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector(selectBookmarks);

  const convertDate = (timestamp: number) => {
    const stamp = new Date(timestamp * 1000);
    return date.format(stamp, 'DD MMM');
  };
  const checkInclude = (bookmark: News) =>
    bookmarks.includes(bookmark as never);

  const search = () =>
    bookmarks.filter((item) =>
      searchInput === ''
        ? item
        : (item.headline &&
            item.headline.toLowerCase().includes(searchInput.toLowerCase())) ||
          (item.summary &&
            item.summary.toLowerCase().includes(searchInput.toLowerCase())),
    );
  return (
    <S.Bookmarks>
      {bookmarks.length > 0 ? (
        search().map((item: News) => (
          <Card
            key={item.id}
            category={item.related || ''}
            datetime={(item.datetime && convertDate(item.datetime)) || ''}
            headline={item.headline || ''}
            summary={item.summary || ''}
            image={item.image || ''}
            url={item.url || ''}
            onBookmark={() => dispatch(removeBookmarkById(item.id))}
            bookmarked={checkInclude(item as never)}
          />
        ))
      ) : (
        <div className="bookmarks-empty">Bookmarks empty.</div>
      )}
    </S.Bookmarks>
  );
};
