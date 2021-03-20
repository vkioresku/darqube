import styled from 'styled-components';

type Props = {
  active?: boolean;
};

export const Tab = styled.button<Props>`
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#707070')};
  background-color: inherit;
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
`;
