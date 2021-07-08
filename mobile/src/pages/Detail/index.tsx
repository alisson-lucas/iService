import React, {Component, useRef, useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header,BackButton,DetailContainer,ProviderImage, DetailTitle, DetailProvider, DetailDescription, ButtonContainer, DetailButton, DetailButton2, ButtonText } from './styles';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons'

import avatar from '../../../assets/images/misc/user-avatar.png';

export default function Detail(){
    const navigation = useNavigation();
    
    function handleBackScreen(){
        navigation.goBack();
    };

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBackScreen}>
                    <Icon name="arrow-left" color="#000080" size={20}/>
                </BackButton>
            </Header>
            <DetailContainer>
                <ProviderImage source={avatar}></ProviderImage>
                <DetailTitle>Personal trainner</DetailTitle>
                <DetailProvider>João Personal</DetailProvider>
                <DetailDescription>Treinos de força, funcional e aeróbico</DetailDescription>
                <ButtonContainer>
                    <DetailButton>
                        <ButtonText>Favoritar</ButtonText>
                    </DetailButton>
                    <DetailButton2>
                        <ButtonText>Contato</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
            </DetailContainer>
        </Container>
    );
};