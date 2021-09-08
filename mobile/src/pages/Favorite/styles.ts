import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const FavoriteContainer = styled.ScrollView`
    padding: 10px;
`;

export const CardFavorite = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 70px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #c0c0c0;
    background-color: #fff;
    margin-top: 10px;
`;

export const CardImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const CardText = styled.Text`
    font-size: 16px;
    color: #000;
`;