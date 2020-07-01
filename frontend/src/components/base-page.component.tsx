import React from 'react';
import Header from './header/header.component';
import FormCard from './form-card/form-card.component';
import ListCard from './list-card/list-card.component';
import FeedsCard from './feeds-card/feeds-card.component';
import { Container } from './base-page.styled';
import useSiteList from '../services/use-site-list';
import useKeyWordList from '../services/use-keyword-list';
import useDateTime from '../services/use-date-time';

const BasePage: React.FC = () => {
  const { siteList, addSiteOnList, removeSiteFromList } = useSiteList();
  const { keyWordList, addKeyWordOnList, removeKeyWordFromList } = useKeyWordList();
  const {
    endAt,
    startAt,
    resetEndAt,
    resetStartAt,
    defineEndAt,
    defineStartAt,
  } = useDateTime();

  return (
    <Container>
      <Header />
      <FormCard 
        addSiteOnList={addSiteOnList}
        addKeyWordOnList={addKeyWordOnList}
        defineStartAt={defineStartAt}
        defineEndAt={defineEndAt}
      />
      <ListCard
        siteList={siteList}
        keyWordList={keyWordList}
        startAt={startAt}
        endAt={endAt}
        removeSiteFromList={removeSiteFromList}
        removeKeyWordFromList={removeKeyWordFromList}
        resetStartAt={resetStartAt}
        resetEndAt={resetEndAt}

      />
      <FeedsCard
        siteList={siteList}
        keyWordList={keyWordList}
        startAt={startAt}
        endAt={endAt}
      />
    </Container>
  )
}

export default BasePage;