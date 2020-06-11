import React from 'react';
import Card from '../core/card/card.component';
import CardTitle from '../core/typography/card-title.component';
import ListItem from './list-item.component';
import ErrorBox from '../core/error-box/error-box.component';

interface IListCard {
  siteList: string[];
  removeSiteFromList: (site: string) => void;
}

const ListCard: React.FC<IListCard> = ({ siteList, removeSiteFromList }) => {
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
          site={site}
          removeSiteFromList={removeSiteFromList}
        />
      )}
    </Card>
  )
} 

export default ListCard;