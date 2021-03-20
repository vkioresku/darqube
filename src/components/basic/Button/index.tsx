import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 16px;
  border: unset;
  width: 116px;
  padding: 8px 0;
  background-color: #3c3c3c;
  color: #fff;
  font-size: 10px;
  font-weight: 700;

  &:active {
    background-color: #6c6c6c;
  }

  &:focus {
    outline: unset;
  }
`;
