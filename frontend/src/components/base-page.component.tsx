import React from 'react';
import Header from './header/header.component'
import ListContainer from './list-container/list-container.component'
import { Container } from './base-page.styled';

const BasePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <ListContainer />
    </Container>
  )
}

export default BasePage;