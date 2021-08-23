import React, {Component, useRef, useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header,BackButton,DetailContainer,ProviderImage, DetailTitle, DetailProvider, DetailDescription, ButtonContainer, DetailButton2, ButtonText } from './styles';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons'

import avatar from '../../../assets/images/misc/user-avatar.png';

export default function Profile(){
    const navigation = useNavigation();
    
    function handleBackScreen(){
        navigation.goBack();
    };

    function handleUpdateUser(){
        navigation.navigate('UpdateUser');
    };

    return (
        <Container>
            <DetailContainer>
                <ProviderImage source={avatar}></ProviderImage>
                <DetailTitle>João José</DetailTitle>
                <DetailDescription>Treinos de força, funcional e aeróbico</DetailDescription>
                <DetailProvider>Áreas de atuação :</DetailProvider>
                <ButtonContainer>
                    <DetailButton2 onPress={handleUpdateUser}>
                        <ButtonText>Alterar informações</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
            </DetailContainer>
        </Container>
    );
};

