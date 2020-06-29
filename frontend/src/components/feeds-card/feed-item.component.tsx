import React, { useState } from 'react';
import News from '../../models/news';
import {
  FeedContainer,
  FeedTitle,
  ItemsContainer,
  NewsContainer,
  NewsTitle,
  NavigationButton,
} from './feed-item.style';

const PER_PAGE = 5;

interface IFeedItem {
  title: string;
  items: News[];
}

const FeedItem: React.FC<IFeedItem> = ({title, items}) => {
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
    <FeedContainer>
      <FeedTitle>
        {title}
      </FeedTitle>
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
    </FeedContainer>
  );
}

export default FeedItem;