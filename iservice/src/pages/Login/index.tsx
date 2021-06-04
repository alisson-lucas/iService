import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, FormContainer, LogoImage, Text, TextInput, FormButton, TextButton, BtnPassword, TextBottom, BtnSign } from './styles';

import Logo from '../../../assets/images/misc/iservice-logo.png';
import { UserController } from '../../controllers/user.controller';
import { ISCheckboxGroup } from '../../components/iService/ISCheckboxGroup';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigation = useNavigation();

    const handleNavigateUserSignScreen = () => {
        navigation.navigate('UserSignIn');
    };

    const doLogin = () => {
        const loginRequest = {
            username,
            password
        };
        
        UserController.login(loginRequest);
    }

  return (
    <Container>
        <FormContainer>
            <LogoImage source={Logo}></LogoImage>
            <Text>Faça login para continuar</Text>
            <TextInput onChangeText={setUsername} placeholder="Email" />
            <TextInput secureTextEntry={true} onChangeText={setPassword} placeholder="Senha"/>
            <FormButton onPress={ doLogin }>
                <TextButton>Login</TextButton>
            </FormButton>
            <BtnPassword>
                <TextBottom>Esqueci minha senha</TextBottom>
            </BtnPassword>
            <BtnSign onPress={handleNavigateUserSignScreen}>
                <TextBottom>Não tem conta? Cadastra-se</TextBottom>
            </BtnSign>
        </FormContainer>
    </Container>
  );
}

export default Login;