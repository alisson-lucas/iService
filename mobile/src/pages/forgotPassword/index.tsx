import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign as Icon, FontAwesome5 } from '@expo/vector-icons'
import { UserController } from '../../controllers/user.controller';

import { Container, HeaderContainer, BodyContainer, CardEmail, CardPassword, Title, SubTitle, ConfirmButton, TextButton } from './styles';

import blueVersion from '../../styles/colors';

const forgotPassword: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const navigation = useNavigation();

  function handleBackScreen(){
    navigation.goBack();
  };

  const confirmEmail = () => {
    setIsValid(!isValid);
  };

  function getUser() {
    const user = {
      userEmail
    }
    UserController.getUser(user.userEmail).then((response) => {
      if (response.error) {
        console.log("Erros Mapeados", response.error);
        Alert.alert("Este email ainda não foi cadastrado!");
      } else { 
        setIsValid(true);
      }

    })
  }

  return (
      <Container>
        <HeaderContainer>
          <Icon name="close" color="#fff" size={25}/>
          <Title>Recuperar senha</Title>
          <Icon name="close" size={25} onPress={handleBackScreen}/>
        </HeaderContainer>
        <BodyContainer>
          {!isValid ? 
            <CardEmail>
              <SubTitle>Digite o seu email:</SubTitle>
              <TextInput style={styles.input} value={userEmail} onChangeText={(value: string) => setUserEmail(value)}></TextInput>
              <ConfirmButton onPress={getUser}>
                <TextButton>Confirmar</TextButton>
              </ConfirmButton>
            </CardEmail>

            : <CardPassword>
                <SubTitle>Digite a nova senha:</SubTitle>
                <TextInput style={styles.input}></TextInput>
                <SubTitle>Repita a nova senha:</SubTitle>
                <TextInput style={styles.input}></TextInput>
                <ConfirmButton>
                  <TextButton>Confirmar</TextButton>
                </ConfirmButton>
            </CardPassword>
          }
        </BodyContainer>
      </Container>
  );
}

const styles = StyleSheet.create({

    input: {
      fontSize: 14,
      paddingHorizontal: 5,
      //borderBottomWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderBottomRightRadius: 5,
      //
      borderColor: blueVersion.lightGray,
      width: '80%',
      marginTop: 15,
  },
  });

export default forgotPassword;