import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, TextInputBold, FormContainer, LogoImage, FormButton, TextButton, BtnPassword, TextBottom, BtnSign } from './styles';

import Logo from '../../../assets/images/misc/iservice-logo.png';
import { Input, Text } from 'react-native-elements';
import { API } from '../../services/api';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Login(){

    const navigation = useNavigation();
    const [email,setEmail] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    
    
    const  Register=() =>
    {
        navigation.navigate('UserSignIn');
           
    };

    const Login = () => 
    {
        console.log("Chamou funcao login");
        console.log("Username = ", email);
        console.log("Password = ", password);
        API.post("/users/login", {username:email,password}).then(response => {
            console.log("Resposta do Login = ", response.data);
            navigation.navigate('Search');
        }).catch(error => {
            console.log("Aconteceu um erro = ",error.response.data);
            

        })
    }

  return (
    <Container>
        <FormContainer>
            <LogoImage source={Logo}></LogoImage>
            
            <Text>Faça login para continuar</Text>
            
            <Input 
                placeholder="E-mail"
                leftIcon={<Icon type='font-awesome' name='envelope' size={18}></Icon>}
                onChangeText={value => setEmail(value)}
                keyboardType= "email-address" 
            ></Input>
            
            <Input 
                placeholder="Password"
                leftIcon={<Icon type='font-awesome' name='lock' size={18}></Icon>}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            ></Input>
    
            <FormButton>
                <TextButton onPress={Login}>Login</TextButton>
            </FormButton>
            
            <BtnPassword>
                <TextBottom>Esqueci minha senha</TextBottom>
            </BtnPassword>
            <BtnSign onPress={Register}>
            <TextBottom>Não tem conta?<TextInputBold>Cadastre-se</TextInputBold></TextBottom>
            </BtnSign>
        </FormContainer>
    </Container>
  );
}