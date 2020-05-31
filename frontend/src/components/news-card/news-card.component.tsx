import React from 'react';
import Card from '../core/card/card.component';
import NewsFeed from './news.-feed.component';

const NewsCard: React.FC = () => {
  return (
    <Card>
      <NewsFeed />
    </Card>
  )
}

export default NewsCard;