import styled from 'styled-components';

import { colors } from '@Styles';

type Props = {
  active?: boolean;
};

export const Tab = styled.button<Props>`
  border: none;
  color: ${({ active }) => (active ? colors.white.base : colors.gray.base)};
  background-color: inherit;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
`;
