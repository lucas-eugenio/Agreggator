import React, { Fragment, useState } from 'react';
import News from '../../models/news';
import {
  FeedContainer,
  FeedTitle,
  ItemsContainer,
  NewsContainer,
  NewsTitle,
  NavigationButton,
} from './feed-item.style';
import ErrorBox from '../core/error-box/error-box.component';

const PER_PAGE = 5;

interface IFeedItem {
  title: string;
  items: News[];
  hasError: boolean;
}

const FeedItem: React.FC<IFeedItem> = ({title, items, hasError}) => {
  const [displayItems, setDisplayItems] = useState<News[]>(items?.slice(0, PER_PAGE));
  const [page, setPage] = useState<number>(1);

  const hasNext = items.length > PER_PAGE * page;
  const hasPrevious = page > 1;

  const handleNextClick = (): void => {
    setDisplayItems(items.slice(page * PER_PAGE, (page + 1) * PER_PAGE));
    setPage(page + 1);
  }

  const handlePreviousClick = (): void => {
    setDisplayItems(items.slice((page - 2) * PER_PAGE, (page - 1) * PER_PAGE));
    setPage(page - 1);
  }

  return (
    <Fragment>
      {!hasError && (
        <FeedContainer>
          <FeedTitle>
            {title}
          </FeedTitle>
          {items.length > 0 ? (
            <ItemsContainer>
              <NavigationButton
                onClick={handlePreviousClick}
                disabled={!hasPrevious}
              >
                {"⬅"}
              </NavigationButton>
              {displayItems.map(news => (
                <NewsContainer
                  href={news.link}
                  key={news.title}
                  target="_blank"
                >
                  <NewsTitle>
                    {news.title}
                  </NewsTitle>
                </NewsContainer>
              ))}
              <NavigationButton
                onClick={handleNextClick}
                disabled={!hasNext}
              >
                {"➡"}
              </NavigationButton>
            </ItemsContainer>
          ) : (
            <ErrorBox>
              Esse site não possui resultados para os filtros aplicados.
            </ErrorBox>
          )}
        </FeedContainer>
      )}
    </Fragment>
  );
}

export default FeedItem;