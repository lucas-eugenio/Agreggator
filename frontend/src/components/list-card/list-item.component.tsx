import React from 'react';
import { SiteContainer, DeleteButton } from './list-item.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface IListItem {
  site: string;
  removeSiteFromList: (site: string) => void;
}

const ListItem: React.FC<IListItem> = ({ site, removeSiteFromList }) => {
  const handleRemoveClick = (): void => {
    removeSiteFromList(site);
  }

  return (
    <SiteContainer>
      {site}
      <DeleteButton onClick={handleRemoveClick}>
        <FontAwesomeIcon
          icon={faTrash}
          color="#FF4D4D"
        />
      </DeleteButton>
    </SiteContainer>
  );
}
export default ListItem;