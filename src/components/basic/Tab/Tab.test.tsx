import React from 'react';
import { render } from '@testing-library/react';
import { Tab } from '.';

test('Tab should render without crashing', () => {
  render(<Tab>Tab</Tab>);
});
