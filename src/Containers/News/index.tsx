import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import date from 'date-and-time';

import {
  selectBookmarks,
  addBookmark,
  removeBookmarkById,
} from '@Containers/Bookmarks/bookmarksSlice';
import { News as NewsType } from '@Types';
import { Card } from '@Components';
import { Button } from '@Components/basic';
import { selectNews } from './newsSlice';
import { nextPage, prevPage, selectPagination } from './paginationSlice';
import * as S from './styled';

import { NewsProps } from './News';

export const News: React.FC<NewsProps> = ({ searchInput }) => {
  const dispatch = useDispatch();
  const { news, loading } = useSelector(selectNews);
  const { page } = useSelector(selectPagination);
  const { bookmarks } = useSelector(selectBookmarks);

  const setNextPage = () => dispatch(nextPage());
  const setPrevPage = () => dispatch(prevPage());
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
  const checkInclude = (bookmark: NewsType) =>
    bookmarks.includes(bookmark as never);
  const manipulateBookmarks = (bookmark: NewsType) => {
    if (checkInclude(bookmark)) {
      dispatch(removeBookmarkById(bookmark.id));
    } else {
      dispatch(addBookmark(bookmark));
    }
  };

  return (
    <S.News>
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

        <div className="pages">
          <div className="flex-container">
            <div className="range">
              {page * 6 - 5}-{page * 6 > newsLength ? newsLength : page * 6}
            </div>
            <div className="quantity">
              out of {loading !== 'pending' && newsLength}
            </div>
          </div>
          <div className="flex-container">
            {page !== 1 && <Button onClick={setPrevPage}>Previous</Button>}
            {Math.ceil(newsLength / 6) !== page && (
              <div className="next-btn">
                <Button onClick={setNextPage}>Next</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </S.News>
  );
};
