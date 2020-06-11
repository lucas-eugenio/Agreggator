import React from 'react';
import News from '../../models/news';
import { FeedContainer, FeedTitle, ItemsContainer, NewsContainer, NewsTitle } from './feed-item.style';

const MAX_CARDS_COUNT = 5;

interface IFeedItem {
  title: string;
  items: News[];
}

const FeedItem: React.FC<IFeedItem> = ({title, items}) => {
  const reducedItems = items.splice(0, MAX_CARDS_COUNT);

  return (
    <FeedContainer>
      <FeedTitle>
        {title}
      </FeedTitle>
      <ItemsContainer>
        {reducedItems.map(news => (
          <NewsContainer href={news.link} key={news.title}>
            <NewsTitle>
              {news.title}
            </NewsTitle>
          </NewsContainer>
        ))}
      </ItemsContainer>
    </FeedContainer>
  );
}

export default FeedItem;