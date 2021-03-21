import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import date from 'date-and-time';

import { selectNews } from './newsSlice';
import {
  selectBookmarks,
  addBookmark,
  removeBookmarkById,
} from '../Bookmarks/bookmarksSlice';
import { Card } from '../../components';
import { Button } from '../../components/basic';
import * as S from './styled';

import { NewsProps } from './News';

type Bookmark = {
  category?: string;
  datetime?: number;
  headline?: string;
  id?: number;
  image?: string;
  related?: string;
  source?: string;
  summary?: string;
  url?: string;
};

export const News: React.FC<NewsProps> = ({ searchInput }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { news, loading } = useSelector(selectNews);
  const { bookmarks } = useSelector(selectBookmarks);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  const convertDate = (timestamp: number) => {
    const stamp = new Date(timestamp * 1000);
    return date.format(stamp, 'DD MMM');
  };
  const paginate = (idx: number) => idx < 6 * page && idx >= 6 * page - 6;
  const search = () =>
    news.filter((item) =>
      searchInput === ''
        ? item
        : (item.headline &&
            item.headline.toLowerCase().includes(searchInput.toLowerCase())) ||
          (item.summary &&
            item.summary.toLowerCase().includes(searchInput.toLowerCase())),
    );
  const newsLength = search().length;
  const checkInclude = (bookmark: Bookmark) =>
    bookmarks.includes(bookmark as never);
  const manipulateBookmarks = (bookmark: Bookmark) => {
    if (checkInclude(bookmark)) {
      dispatch(removeBookmarkById(bookmark.id));
    } else {
      dispatch(addBookmark(bookmark));
    }
  };

  return (
    <S.News className="flex-container">
      <div className="latest">
        {loading !== 'pending' &&
          news
            .filter((item, idx) => idx < 1)
            .map((item) => (
              <Card
                key={item.id}
                large
                category={item.related || ''}
                datetime={(item.datetime && convertDate(item.datetime)) || ''}
                headline={item.headline || ''}
                summary={item.summary || ''}
                image={item.image || ''}
                url={item.url || ''}
                onBookmark={() => manipulateBookmarks(item as never)}
                bookmarked={checkInclude(item)}
              />
            ))}
      </div>
      <div className="cards-container">
        {loading !== 'pending' &&
          search()
            .filter((item, idx) => paginate(idx))
            .map((item) => (
              <Card
                key={item.id}
                category={item.related || ''}
                datetime={(item.datetime && convertDate(item.datetime)) || ''}
                headline={item.headline || ''}
                image={item.image || ''}
                summary={item.summary || ''}
                url={item.url || ''}
                onBookmark={() => manipulateBookmarks(item)}
                bookmarked={checkInclude(item)}
              />
            ))}

        <div className="pages flex-container space-between align-center">
          <div className="flex-container">
            <div className="range">
              {page * 6 - 5}-{page * 6 > newsLength ? newsLength : page * 6}
            </div>
            <div className="quantity">
              out of {loading !== 'pending' && newsLength}
            </div>
          </div>
          <div className="flex-container">
            {page !== 1 && <Button onClick={prevPage}>Previous</Button>}
            {Math.ceil(newsLength / 6) !== page && (
              <div className="next-btn">
                <Button onClick={nextPage}>Next</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </S.News>
  );
};
