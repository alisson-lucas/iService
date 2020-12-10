import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Wrapper, Header, TitleContainer, Title, Balance} from './styles';

import Map from '../../components/Map'


export default function Search() {
    return (
        <Wrapper>
            <Header>
              <TitleContainer>
                <Balance>Serviços</Balance>
              </TitleContainer>
            </Header>
            <Map />
        </Wrapper>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
})