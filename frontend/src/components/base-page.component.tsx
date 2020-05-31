import React from 'react';
import Header from './header/header.component';
import FormCard from './form-card/form-card.component';
import ListCard from './list-card/list-card.component';
import NewsCard from './news-card/news-card.component';
import { Container } from './base-page.styled';

const BasePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <FormCard />
      <ListCard />
      <NewsCard />
    </Container>
  )
}

export default BasePage;