import React, { Fragment } from 'react';
import CardTitle from '../core/typography/card-title.component';
import useNewsFetcher from '../../services/use-news-fetcher';
import FeedItem from './feed-item.component';
import { Loader } from './feeds-card.style';
import Card from '../core/card/card.component';
import ErrorBox from '../core/error-box/error-box.component';

interface IFeedsCard {
  siteList: string[]
}

const FeedsCard: React.FC<IFeedsCard> = ({ siteList }) => {
  const { data, loading, error } = useNewsFetcher(siteList); 

  const showContent = siteList.length > 0;

  return (
    <Fragment>
      {showContent &&(
        <Card>
        {error && (
          <ErrorBox>
            Algo deu Errado! Provavelmente, Um dos Endereços Fornecidos Não É Válido!
          </ErrorBox>
        )}
        {loading && <Loader />}
        <Fragment>
          <CardTitle>
            Notícias:
          </CardTitle>
          {data?.map(feed => (
            <FeedItem title={feed.title} items={feed.items} key={feed.title}/>
          ))}
        </Fragment>
      </Card>
    )}
    </Fragment>
  );
}

export default FeedsCard;