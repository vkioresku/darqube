import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

test('Button should render without crashing', () => {
  render(<Button>Button</Button>);
});
