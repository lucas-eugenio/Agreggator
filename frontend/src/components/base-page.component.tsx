import React from 'react';
import Header from './header/header.component';
import FormCard from './form-card/form-card.component';
import ListCard from './list-card/list-card.component';
import FeedsCard from './feeds-card/feeds-card.component';
import { Container } from './base-page.styled';
import useSiteList from '../services/use-site-list';

const BasePage: React.FC = () => {
  const { siteList, addSiteOnList, removeSiteFromList } = useSiteList();

  return (
    <Container>
      <Header />
      <FormCard addSiteOnList={addSiteOnList} />
      <ListCard
        siteList={siteList}
        removeSiteFromList={removeSiteFromList}
      />
      <FeedsCard siteList={siteList} />
    </Container>
  )
}

export default BasePage;