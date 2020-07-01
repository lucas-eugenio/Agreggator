import styled from 'styled-components';

export const Loader = styled.div`
  border: 8px solid #F3F3F3;
  border-top: 8px solid #3498DB;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  margin-top: 20px;
`;