import React from 'react';

import { GlobalStyles, Layout } from '../../components';
import { Search, Button, Tab } from '../../components/basic';
import * as S from './styled';

const App = () => {
  return (
    <S.App>
      <GlobalStyles />
      <Layout>
        <Search />
        <Button>Hello</Button>
        <Tab active>News</Tab>
        <Tab active={false}>Bookmarks</Tab>
      </Layout>
    </S.App>
  );
};

export default App;
