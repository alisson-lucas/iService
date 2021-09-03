import React, { useState, useContext, useRef } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import { Container, TextInputBold, FormContainer, LogoImage, FormButton, TextButton, BtnPassword, TextBottom, BtnSign } from './styles';
import LottieView from 'lottie-react-native';

import Logo from '../../../assets/images/misc/iservice-logo.png';
import { Input, Text } from 'react-native-elements';
import { API } from '../../services/api';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import LoadingImage from '../../../assets/loading.json';

const UserLoginScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    const [isLiked, serIsLiked] = useState<any>(true)
    const { user, setUser }  = useContext(AuthContext)
    

    const animation = React.useRef<any>(null);
    const isFirstRun = React.useRef(true);
    
    React.useEffect(() => {
        if (isFirstRun.current) {
            animation.current.play(66, 66);
          if (isLiked) {
          } else {
            animation.current.play(19, 19);
          }
          isFirstRun.current = false;
        } else if (isLiked) {
          animation.current.play(19, 50);
        } else {
          animation.current.play(0, 19);
        }
    }, []);

    const Register=() => {
        navigation.navigate('UserRegister');
    };

    const Login = () => 
    {
        console.log("Chamou funcao login");
        console.log("Username = ", email);
        console.log("Password = ", password);
        API.post("/users/login", {username:email,password}).then(response => {
            console.log("Resposta do Login = ", response.data);
            navigation.navigate('Search');
            setUser(response.data);
            
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
            { isLiked == true &&
            <LottieView
                ref={animation}
                autoPlay={false}
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: 80,
                    height: 80,
                    backgroundColor: '#f8f6f6',
                }}
                source={require('../../../assets/loading.json')}
               
            />
            
            }
    
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
};

export default UserLoginScreen;