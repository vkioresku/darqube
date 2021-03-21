import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '@Styles';

export const News = styled.section`
  display: flex;
  .header {
    margin-bottom: 30px;
  }

  .flex-container {
    display: flex;
  }

  .cards-container {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: end;
    grid-template-rows: repeat(2, 1fr);
    gap: 22px 18px;
  }

  .pages {
    justify-self: normal;
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .latest {
    margin-right: 24px;
  }

  .range {
    color: ${colors.white.base};
    font-size: 12px;
  }

  .quantity {
    font-size: 12px;
    margin-left: 8px;
    color: ${rgba(colors.white.base, 0.25)};
  }

  .next-btn {
    margin-left: 8px;
  }
`;
