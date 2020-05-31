import React, { Fragment, useState } from 'react';
import CardTitle from '../core/typography/card-title.component';
import useList from '../../services/use-list';
import ListItem from './list-item.component';

const ListInfo: React.FC = () => {
  const { getList } = useList();

  const [siteList, setSiteList] = useState<string[]>(getList());

  const handleListChange = (list: string[]): void => {
    setSiteList(list);
  }

  return (
    <Fragment>
      <CardTitle>
        Sites Acompanhados:
      </CardTitle>
      {siteList.map(site => 
        <ListItem
          key={site}
          site={site}
          onListChange={handleListChange}
        />
      )}
    </Fragment>
  );
}

export default ListInfo;