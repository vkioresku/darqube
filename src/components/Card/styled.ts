import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '@Styles';

type Props = {
  large?: boolean;
};

export const Card = styled.div<Props>`
  position: relative;
  cursor: default;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  width: ${({ large }) => (large ? '475px' : '280px')};
  height: ${({ large }) => (large ? '625px' : '425px')};
  background: ${rgba(colors.black.base, 0.5)};
  padding: 25px;
  border-radius: 6px;
  overflow: unset;

  .card-image {
    border-radius: 6px;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
  }

  .flex-container {
    z-index: 2;
    display: flex;
    align-items: center;
  }

  .category {
    z-index: 2;
    color: ${colors.white.base};
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid ${colors.white.base};
  }

  .tag {
    z-index: 2;
    color: ${colors.white.base};
    margin-left: auto;
    background-color: ${colors.red.base};
    padding: 5px 10px;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .bottom-content {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    z-index: 2;
    cursor: pointer;
    color: ${colors.white.base};
    align-self: end;
  }

  .title {
    font-size: ${({ large }) => (large ? '24px' : '20px')};
    margin-bottom: 10px;
  }

  .summary {
    margin-bottom: ${({ large }) => (large ? '40px' : '20px')};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    opacity: 0.5;
  }

  .explore {
    color: ${colors.white.base};
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .card-arrow-circle {
    width: 20px;
    height: 20px;
    margin-right: 11px;
    fill: ${rgba(colors.white.base, 0.25)};
  }

  .separator {
    z-index: 2;
    height: 20px;
    width: 2px;
    background-color: ${rgba(colors.white.base, 0.1)};
    margin: 0 15px;
  }

  .date {
    color: ${colors.white.base};
    opacity: 0.75;
    font-size: 13px;
  }

  .duration {
    color: ${colors.white.base};
    opacity: 0.35;
    font-size: 12px;
    font-weight: 700;
  }

  .card-icon {
    cursor: pointer;
    width: 13px;
    height: 13px;
    fill: ${rgba(colors.white.base, 0.5)};

    &:not(:first-child) {
      margin-left: 14px;
    }
  }

  .bookmark {
    background: unset;
    outline: none;
    border: none;
  }
`;
