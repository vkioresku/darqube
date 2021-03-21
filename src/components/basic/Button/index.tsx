import styled from 'styled-components';

import { colors } from '@Styles';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 16px;
  border: unset;
  width: 116px;
  padding: 8px 0;
  background-color: ${colors.gray.darken};
  color: ${colors.white.base};
  font-size: 10px;
  font-weight: 700;

  &:active {
    background-color: ${colors.gray.base};
  }

  &:focus {
    outline: unset;
  }
`;
