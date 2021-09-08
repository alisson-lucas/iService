import React from 'react';
import { StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView from '../../components/iService/ISMapView'
import { Wrapper, LabelContainer, LabelTitle,  BtnContainer, BtnFavorite, BtnAvaliation, BtnText} from './styles';

const Search = () => {
    const navigation = useNavigation();

    const handleNavigateFavorite = () => {
        navigation.navigate('Favorite');
    };

    return (
        <Wrapper>
            <LabelContainer>
                <LabelTitle>Encontre o serviço que você está precisando!</LabelTitle>
            </LabelContainer>
            <MapView />

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
});

export default Search;