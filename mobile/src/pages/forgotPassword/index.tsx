import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Container, Title, SubTitle, ConfirmButton, TextButton } from './styles';

import blueVersion from '../../styles/colors';

const forgotPassword: React.FC = () => {
  return (
      <Container>
          <Title>Esqueci a senha</Title>
          <SubTitle>Digite o seu email:</SubTitle>
          <TextInput style={styles.input}></TextInput>
          <ConfirmButton>
            <TextButton>Confirmar</TextButton>
          </ConfirmButton>
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