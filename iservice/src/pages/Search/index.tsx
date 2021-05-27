import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Wrapper, Header, TitleContainer, LabelContainer, LabelTitle, Title, Balance,BtnContainer, BtnFavorite, BtnAvaliation, BtnText} from './styles';

// import Map from '../../components/Map'
import Map2 from '../../components/Map2'


export default function Search() {
    return (
        <Wrapper>
            {/* <Header>
              <TitleContainer>
                <Balance>Serviços</Balance>
              </TitleContainer>
            </Header> */}
            <LabelContainer>
                <LabelTitle>Encontre o serviço que você está precisando!</LabelTitle>
            </LabelContainer>
            <Map2 />

            <BtnContainer>
                <BtnFavorite>
                    <BtnText>Favoritos</BtnText>
                </BtnFavorite>
                <BtnAvaliation>
                    <BtnText>Avaliações</BtnText>
                </BtnAvaliation>
            </BtnContainer>
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