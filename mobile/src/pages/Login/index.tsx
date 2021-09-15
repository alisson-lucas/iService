import React, { useState, useContext, useRef } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import { Container, TextInputBold, FormContainer, LogoImage, FormButton, TextButton, BtnPassword, TextBottom, BtnSign } from './styles';
// import LottieView from 'lottie-react-native';

import Logo from '../../../assets/images/misc/iservice-logo.png';
import { Input, Text } from 'react-native-elements';
import { API } from '../../services/api';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import LoadingImage from '../../../assets/loading.json';
import { ISLoadingPopup }  from '../../components/iService/ISLoadingPopup';

const UserLoginScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    const [loading, setLoading] = useState<any>(false)
    const { user, setUser }  = useContext(AuthContext)

    const Register=() => {
        navigation.navigate('UserRegister');
    };
    
    const ForgotPassword=() => {
        navigation.navigate('ForgotPassword');
    };

    const Login = () => 
    {
        console.log("Chamou funcao login");
        console.log("Username = ", email);
        console.log("Password = ", password);
        if ( email != null && password != null) {
            setLoading(true);

            API.post("/users/login", {username:email,password}).then(response => {
                console.log("Resposta do Login = ", response.data);
                navigation.navigate('Search');
                setUser(response.data);
                setLoading(false);
            }).catch(error => {
                console.log("Aconteceu um erro = ",error.response.data);
                
                Alert.alert(error.response.data.message);
            })
        } else {
            Alert.alert("Email e senha não podem ficar vazios");
        }

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

            { loading == true && <ISLoadingPopup /> }

            <FormButton>
                <TextButton onPress={Login}>Login</TextButton>
            </FormButton>
            
            <BtnPassword onPress={ForgotPassword}>
                <TextBottom>Esqueci minha senha</TextBottom>
            </BtnPassword>
            <BtnSign onPress={Register}>
            <TextBottom>Não tem conta?<TextInputBold>Cadastre-se</TextInputBold></TextBottom>
            </BtnSign>
        </FormContainer>
    </Container>
  );
};

export default UserLoginScreen;