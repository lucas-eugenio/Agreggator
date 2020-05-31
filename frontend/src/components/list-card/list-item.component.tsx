import React from 'react';
import { SiteContainer, DeleteButton } from './list-item.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useList from '../../services/use-list';

interface IListItem {
  site: string;
  onListChange: (list: string[]) => void;
}

const ListItem: React.FC<IListItem> = ({ site, onListChange }) => {
  const { getList, setList } = useList();

  const handleClick = () => {
    const newList = getList().filter(item => item !== site);
    setList(newList);
    onListChange(newList);
  }

  return (
    <SiteContainer>
      {site}
      <DeleteButton onClick={handleClick}>
        <FontAwesomeIcon
          icon={faTrash}
          color="#FF4D4D"
        />
      </DeleteButton>
    </SiteContainer>
  );
};

export default ListItem;