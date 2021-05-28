import React from 'react';
import { View } from 'react-native';

import { Container, FormContainer, LogoImage, Text, TextInput, FormButton, TextButton, BtnPassword, TextBottom, BtnSign } from './styles';

import Logo from '../../../assets/images/misc/iservice-logo.png';

export default function Login(){
  return (
    <Container>
        <FormContainer>
            <LogoImage source={Logo}></LogoImage>
            <Text>Faça login para continuar</Text>
            <TextInput placeholder="Login"></TextInput>
            <TextInput placeholder="Senha"></TextInput>
            <FormButton>
                <TextButton>Login</TextButton>
            </FormButton>
            <BtnPassword>
                <TextBottom>Esqueci minha senha</TextBottom>
            </BtnPassword>
            <BtnSign>
            <TextBottom>Não tem conta? Cadastra-se</TextBottom>
            </BtnSign>
        </FormContainer>
    </Container>
  );
}