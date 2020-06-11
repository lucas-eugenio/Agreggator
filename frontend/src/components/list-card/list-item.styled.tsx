import styled from 'styled-components';

export const SiteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 20px 0px;
  font-size: 14px;
  font-weight: bold;
  color: #286E84;
  border: solid;
  border-radius: 4px;
  border-color: #286E84;
  border-width: 1px;
  padding: 8px;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background-color: #E7F4F8;
  border-radius: 4px;
  border-color: #286E84;
  border-width: 1px;
  :hover {
    background-color: #BEC1C4;
  }
`;