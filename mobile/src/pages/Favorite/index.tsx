import React from 'react';
import { View } from 'react-native';

import { Container,FavoriteContainer, CardFavorite, CardImage, CardText } from './styles';

import Avatar from '../../../assets/images/misc/user-avatar.png'
import Heart from '../../../assets/images/misc/heart.png'

export default function Favorite(){
  return (
    <Container>
        <FavoriteContainer>
         <CardFavorite>
            <CardImage source={Avatar}></CardImage>
            <CardText> Evandro Fernandes </CardText>
            <CardImage source={Heart}></CardImage>
         </CardFavorite>
         <CardFavorite>
            <CardImage source={Avatar}></CardImage>
            <CardText> Roberto Firmino </CardText>
            <CardImage source={Heart}></CardImage>
         </CardFavorite>
        </FavoriteContainer>
    </Container>
  );
}
