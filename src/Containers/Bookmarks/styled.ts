import styled from 'styled-components';

export const Bookmarks = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  .bookmarks-empty {
    margin-top: 200px;
    color: #fff;
    grid-column: 1 / -1;
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`;
