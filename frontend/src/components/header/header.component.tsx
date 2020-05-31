import React from 'react';
import { HeaderContainer, HeaderText } from './header.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <FontAwesomeIcon
        icon={faNewspaper}
        color="#E7F4F8"
        size="lg"
      />
      <HeaderText>
        LE Super Aggregator
      </HeaderText>
    </HeaderContainer>
  );
}

export default Header;