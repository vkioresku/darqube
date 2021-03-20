import React from 'react';

import { GlobalStyles, Layout, Card } from '../../components';
import { Search, Button, Tab } from '../../components/basic';
import * as S from './styled';

const App = () => {
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
              <Card large />
            </div>
            <div className="cards-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <div className="pages flex-container space-between align-center">
                <div className="flex-container">
                  <div className="range">1-6</div>
                  <div className="quantity">out of 24</div>
                </div>
                <div className="flex-container">
                  <Button>Previous</Button>
                  <div className="next-btn">
                    <Button>Next</Button>
                  </div>
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
