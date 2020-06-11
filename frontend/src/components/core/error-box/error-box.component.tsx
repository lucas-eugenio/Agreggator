import React from 'react';
import { ErrorContainer } from './error-box.style';

interface IErrorBox {
  children: React.ReactNode;
}

const ErrorBox: React.FC<IErrorBox> = ({ children }) => (
  <ErrorContainer>
    {children}
  </ErrorContainer>
);

export default ErrorBox;