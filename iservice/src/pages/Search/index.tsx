import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Wrapper, Header, TitleContainer, LabelContainer, LabelTitle, Title, Balance,BtnContainer, BtnFavorite, BtnAvaliation, BtnText} from './styles';
import { useNavigation } from '@react-navigation/native';
// import Map from '../../components/Map'
import Map2 from '../../components/Map2'


export default function Search() {

    const navigation = useNavigation();

    function handleNavigateFavorite(){
        navigation.navigate('Favorite');
    };

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
                    <BtnText onPress={handleNavigateFavorite}>Favoritos</BtnText>
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