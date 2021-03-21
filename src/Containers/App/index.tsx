import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNews, fetchNews } from './newsSlice';

import { GlobalStyles, Layout, Card } from '../../components';
import { Search, Button, Tab } from '../../components/basic';
import * as S from './styled';

const App = () => {
  const [page, setPage] = useState(1);
  const { news, loading } = useSelector(selectNews);
  const newsLength = news.length;
  const dispatch = useDispatch();

  console.log(Math.ceil(newsLength / 6) === page);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <S.App>
        <Layout>
          <div className="header flex-container space-between align-center">
            <div>
              <Tab active>News</Tab>
              <Tab>Bookmarks</Tab>
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className="flex-container">
            <div className="latest">
              {loading !== 'pending' &&
                news
                  .filter((item, idx) => idx < 1)
                  .map(
                    ({
                      category,
                      datetime,
                      headline,
                      id,
                      image,
                      related,
                      source,
                      summary,
                      url,
                    }) => (
                      <Card
                        key={id}
                        large
                        category={related}
                        datetime={datetime}
                        headline={headline}
                        summary={summary}
                        image={image}
                        url={url}
                      />
                    ),
                  )}
            </div>
            <div className="cards-container">
              {loading !== 'pending' &&
                news
                  .filter((item, idx) => idx < 6 * page && idx >= 6 * page - 6)
                  .map(
                    ({
                      category,
                      datetime,
                      headline,
                      id,
                      image,
                      related,
                      source,
                      summary,
                      url,
                    }) => (
                      <Card
                        key={id}
                        category={related}
                        datetime={datetime}
                        headline={headline}
                        image={image}
                        summary={summary}
                        url={url}
                      />
                    ),
                  )}

              <div className="pages flex-container space-between align-center">
                <div className="flex-container">
                  <div className="range">1-6</div>
                  <div className="quantity">
                    out of {loading !== 'pending' && news.length}
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
          </div>
        </Layout>
      </S.App>
    </>
  );
};

export default App;
