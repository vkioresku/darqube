import React from 'react';
import { render } from '@testing-library/react';
import { Search } from '.';

test('Search should render without crashing', () => {
  render(<Search search="" setSearch={console.log} />);
});
