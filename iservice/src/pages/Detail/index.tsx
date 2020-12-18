import React, {Component, useRef, useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header,BackButton, DetailTitle, DetailProvider, DetailDescription, ButtonContainer, DetailButton, DetailButton2, ButtonText } from './styles';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons'

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
            <DetailTitle>Personal trainner</DetailTitle>
            <DetailProvider>João Personal</DetailProvider>
            <DetailDescription>Treinos de força, funcional e aeróbico</DetailDescription>
                <ButtonContainer>
                    <DetailButton>
                        <ButtonText>Whatsapp</ButtonText>
                    </DetailButton>
                    <DetailButton2>
                        <ButtonText>E-mail</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
        </Container>
    );
};