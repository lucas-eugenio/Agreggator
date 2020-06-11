import styled from 'styled-components';

export const FeedContainer = styled.div`
  padding: 20px;
  margin-top: 40px;
  background-color: white;
  border: solid;
  border-width: 1px;
  border-radius: 8px;
  border-color: #286E84;
  border-width: 2px;
`;

export const FeedTitle = styled.b`
  color: #286E84;
  font-size: 16px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: center;
`;

export const NewsContainer = styled.a`
  width: 150px;
  background-color: #E7F4F8;
  border-radius: 8px;
  border: solid;
  border-width: 1px;
  border-color: #286E84;
  padding: 8px;
  text-align: center;
  :hover {
    background-color: #BEC1C4;
  }
  :not(:last-child) {
    margin-right: 20px
  }
`;

export const NewsTitle = styled.b`
  color: #286E84;
  font-size: 14px;
`;