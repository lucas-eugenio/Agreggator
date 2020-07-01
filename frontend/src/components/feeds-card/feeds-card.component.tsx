import React, { Fragment } from 'react';
import CardTitle from '../core/typography/card-title.component';
import useNewsFetcher from '../../services/use-news-fetcher';
import FeedItem from './feed-item.component';
import { Loader } from './feeds-card.style';
import Card from '../core/card/card.component';
import ErrorBox from '../core/error-box/error-box.component';

interface IFeedsCard {
  siteList: string[];
  keyWordList: string[];
  startAt: string;
  endAt: string;
}

const FeedsCard: React.FC<IFeedsCard> = ({ siteList, keyWordList, startAt, endAt }) => {
  const { data, loading, error } = useNewsFetcher(siteList, keyWordList, startAt, endAt); 

  const showContent = siteList.length > 0;
  const errorOnParse = data && data.filter(feed => feed.hasError).length > 0;

  return (
    <Fragment>
      {showContent && (
        <Card>
        {error && (
          <ErrorBox>
            Algo deu Errado! Provavelmente, Um dos Endereços Fornecidos Não É Válido!
          </ErrorBox>
        )}
        {errorOnParse && (
          <ErrorBox>
            Ao Menos Um Endereço Teve Erro na Consulta dos Dados. Talvez, Este Site Não Seja Válido!
          </ErrorBox>
        )}
        <Fragment>
          <CardTitle>
            Notícias:
          </CardTitle>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              {data?.map(feed => (
                <FeedItem
                  key={feed.title}
                  title={feed.title}
                  items={feed.items}
                  hasError={feed.hasError}
                />
              ))}
            </Fragment>
          )}
        </Fragment>
      </Card>
    )}
    </Fragment>
  );
}

export default FeedsCard;