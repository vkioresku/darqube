import styled from 'styled-components';

export const News = styled.section`
  .header {
    margin-bottom: 30px;
  }

  .flex-container {
    display: flex;
  }

  .space-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }

  .cards-container {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 22px 18px;
  }

  .pages {
    grid-column: 1 / -1;
  }

  .latest {
    margin-right: 18px;
  }

  .range {
    color: #fff;
    font-size: 12px;
  }

  .quantity {
    font-size: 12px;
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.25);
  }

  .next-btn {
    margin-left: 8px;
  }
`;
