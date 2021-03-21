import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchNews } from '../News/newsSlice';
import { News } from '../News';
import { Bookmarks } from '../Bookmarks';
import { GlobalStyles, Layout } from '../../components';
import { Search, Tab } from '../../components/basic';
import * as S from './styled';

const App = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const resetSearch = () => setSearch('');

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
              <Link onClick={resetSearch} to="/">
                <Tab active={pathname === '/'}>News</Tab>
              </Link>
              <Link onClick={resetSearch} to="bookmarks">
                <Tab active={pathname === '/bookmarks'}>Bookmarks</Tab>
              </Link>
            </div>
            <Search search={search} setSearch={setSearch} />
          </div>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <News searchInput={search} />}
            />
            <Route
              path="/bookmarks"
              component={() => <Bookmarks searchInput={search} />}
            />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </S.App>
    </>
  );
};

export default App;
