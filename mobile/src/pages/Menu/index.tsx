import React from 'react';
import { View } from 'react-native';

import { Container, MenuContainer, BtnMenu, BtnMenuText } from './styles';

const Menu = () => {
  return (
    <Container>
        <BtnMenu>
            <BtnMenuText>Sair</BtnMenuText>
        </BtnMenu>
    </Container>
  );
}

export default Menu;