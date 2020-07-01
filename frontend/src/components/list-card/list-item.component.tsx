import React from 'react';
import { SiteContainer, DeleteButton } from './list-item.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface IListItem {
  item: string;
  removeItemFromList: (item: string) => void;
}

const ListItem: React.FC<IListItem> = ({ item, removeItemFromList }) => {
  const handleRemoveClick = (): void => {
    removeItemFromList(item);
  }

  return (
    <SiteContainer>
      {item}
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