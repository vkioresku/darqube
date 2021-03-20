import styled from 'styled-components';

type Props = {
  large?: boolean;
};

export const Card = styled.div<Props>`
  cursor: default;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  width: ${({ large }) => (large ? '475px' : '280px')};
  height: ${({ large }) => (large ? '625px' : '425px')};
  background-color: gray;
  padding: 25px;
  border-radius: 6px;

  .flex-container {
    display: flex;
    align-items: center;
  }

  .category {
    color: #fff;
    font-size: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid #fff;
  }

  .tag {
    color: #fff;
    margin-left: auto;
    background-color: #931636;
    padding: 5px 10px;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .bottom-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    cursor: pointer;
    font-size: ${({ large }) => (large ? '24px' : '20px')};
    line-height: 32px;
    align-self: end;
    margin-bottom: ${({ large }) => (large ? '40px' : '20px')};
  }

  .explore {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .card-arrow-circle {
    width: 20px;
    height: 20px;
    margin-right: 11px;
    fill: #242525;
  }

  .separator {
    height: 100%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.08);
    margin: 0 15px;
  }

  .date {
    font-size: 13px;
  }

  .duration {
    font-size: 12px;
    font-weight: 700;
  }

  .card-icon {
    cursor: pointer;
    width: 13px;
    height: 13px;
    fill: rgba(255, 255, 255, 0.5);

    &:not(:first-child) {
      margin-left: 14px;
    }
  }
`;
