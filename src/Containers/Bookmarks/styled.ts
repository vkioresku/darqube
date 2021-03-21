import styled from 'styled-components';

import { colors } from '@Styles';

export const Bookmarks = styled.section`
  display: grid;
  justify-items: center;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  .bookmarks-empty {
    margin-top: 200px;
    color: ${colors.white.base};
    grid-column: 1 / -1;
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`;
