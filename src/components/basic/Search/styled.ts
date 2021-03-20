import styled from 'styled-components';

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
    fill: #fff;
  }

  .search-input {
    width: 100%;
    color: white;
    background-color: #191818;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px 7.5px 10px 30px;
    border: unset;

    &::placeholder {
      color: #686868;
    }

    &:focus {
      outline: none;
    }
  }
`;
