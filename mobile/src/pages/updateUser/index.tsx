import React, { useState } from 'react';
import { View } from 'react-native';
import { ISTextInput } from '../../components/iService/ISTextInput';

import { Container, ProfileImage, ProfileImageContainer, ImageLabel, FormButton, TextButton } from './styles';

import avatar from '../../../assets/images/misc/user-avatar.png';

const initialErrorsState: { [key: string]: string | null } = {
  username: null,
  password: null,
  name: null,
  cpf: null,
  address: null,
  phone: null,
  description: null,
  occupation: null,
};

const updateUser = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [repeat_password, setRepeatPassword] = useState<string | null>(null);
  const [type, setType] = useState<string | null>("CLIENTE");
  const [name, setName] = useState<string | null>(null);
  const [cpf, setCpf] = useState<string>('');

  const [errors, setError] = useState(initialErrorsState);


  return (
    <Container>
        <ProfileImageContainer>
          <ProfileImage source={avatar}></ProfileImage>
          <ImageLabel>Alterar imagem</ImageLabel>
        </ProfileImageContainer>
          <ISTextInput label={"Nome"} errorMessage={errors.name} placeholder={"Nome"} value={name} onChangeText={(value: string) => setName(value)} />
          <ISTextInput label={"Username"} errorMessage={errors.username} placeholder={"Email"} value={username} onChangeText={(value: string) => { setUsername(value); setError( { ...errors, username : null})}} />
          <ISTextInput label={"Senha"} errorMessage={errors.password} placeholder={"Senha"} value={password} onChangeText={(value: string) => { setPassword(value); setError( { ...errors, password : null})}} secureTextEntry={true} />
          <ISTextInput label={"Repetir Senha"} errorMessage={errors.password} placeholder={"Repetir senha"} value={repeat_password} onChangeText={(value: string) => setRepeatPassword(value)} secureTextEntry={true} />
          <FormButton>
            <TextButton>Atualizar Informações</TextButton>
          </FormButton>
    </Container>
  );
}

export default updateUser;