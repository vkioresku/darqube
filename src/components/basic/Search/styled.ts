import styled from 'styled-components';

import { colors } from '@Styles';

export const Search = styled.div`
  max-width: 280px;
  position: relative;
  display: flex;

  .search-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    left: 7.5px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${colors.white.base};
  }

  .search-input {
    width: 100%;
    color: white;
    background-color: ${colors.black.ligten20};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px 7.5px 10px 30px;
    border: unset;

    &::placeholder {
      color: ${colors.gray.base};
    }

    &:focus {
      outline: none;
    }
  }
`;
