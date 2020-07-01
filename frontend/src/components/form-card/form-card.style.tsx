import styled from 'styled-components';

export const TextInput = styled.input`
  width: inherit;
  font-size: 14px;
  font-weight: bold;
  color: #286E84;
  border-radius: 4px;
  border-color: #286E84;
  border-width: 1px;
  padding: 8px;
`;

export const TimeInput = styled.input`
  width: inherit;
  font-size: 14px;
  font-weight: bold;
  color: #286E84;
  border-radius: 4px;
  border-color: #286E84;
  border-width: 1px;
  padding: 8px;
`;

export const SubmitButton = styled.button`
  background-color: #286E84;
  font-size: 14px;
  font-weight: bold;
  color: #E7F4F8;
  margin-left: 20px;
  border-color: #286E84;
  border-radius: 4px;
  border-width: 1px;
  padding: 8px;
  :hover {
    background-color: #BEC1C4;
  }
`; 

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InputBox = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`;

export const InputForm = styled.form`
  width: 50%
`;

export const TimeForm = styled.form`
  width: 45%
`;
