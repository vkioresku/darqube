import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '.';

test('Card should render without crashing', () => {
  render(
    <Card
      large
      category=""
      datetime=""
      headline=""
      summary=""
      image=""
      url=""
      onBookmark={console.log}
      bookmarked
    />,
  );
});
