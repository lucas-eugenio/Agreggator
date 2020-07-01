import React from 'react';
import Card from '../core/card/card.component';
import CardTitle from '../core/typography/card-title.component';
import ListItem from './list-item.component';
import ErrorBox from '../core/error-box/error-box.component';
import { SectionContainer, TimeSectionContainer, TimeBox } from './list-card.styled';

interface IListCard {
  siteList: string[];
  keyWordList: string[];
  startAt: string;
  endAt: string;
  removeSiteFromList: (site: string) => void;
  removeKeyWordFromList: (keyWord: string) => void;
  resetStartAt: () => void;
  resetEndAt: () => void;
}

const ListCard: React.FC<IListCard> = ({
  siteList,
  keyWordList,
  startAt,
  endAt,
  removeSiteFromList,
  removeKeyWordFromList,
  resetStartAt,
  resetEndAt,
}) => {
  const showDateTime = startAt || endAt;

  return (
    <Card>
      <CardTitle>
        Sites Acompanhados:
      </CardTitle>
      {siteList.length === 0 && (
        <ErrorBox>
          A Lista de Sites Acompanhados Está Vazia!
        </ErrorBox>
      )}
      {siteList.map(site => 
        <ListItem
          key={site}
          item={site}
          removeItemFromList={removeSiteFromList}
        />
      )}
      {keyWordList.length > 0 && (
        <SectionContainer>
          <CardTitle>
            Frases Chaves Acompanhadas:
          </CardTitle>
          {keyWordList.map(keyWord => 
            <ListItem
              key={keyWord}
              item={keyWord}
              removeItemFromList={removeKeyWordFromList}
            />
          )}
        </SectionContainer>
      )}
      {showDateTime && (
        <TimeSectionContainer>
          {startAt && (
            <TimeBox>
              <CardTitle>
                Horário Inicial:
              </CardTitle>
              <ListItem
                item={startAt}
                removeItemFromList={resetStartAt}
              />
            </TimeBox>
          )}
          {endAt && (
            <TimeBox>
              <CardTitle>
                Horário Final:
              </CardTitle>
              <ListItem
                item={endAt}
                removeItemFromList={resetEndAt}
              />
            </TimeBox>
          )}
        </TimeSectionContainer>
      )}
    </Card>
  )
} 

export default ListCard;