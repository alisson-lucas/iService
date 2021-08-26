import React, { useState, useEffect, useContext } from 'react';
import { View, Platform, Image } from 'react-native';
import { ISTextInput } from '../../components/iService/ISTextInput';
import * as ImagePicker from 'expo-image-picker';
import AuthContext from '../../contexts/auth';

import { Container, ProfileImage, ProfileImageContainer, PickImage, ImageLabel, FormButton, TextButton } from './styles';

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
  const { user, setUser }  = useContext(AuthContext);
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [repeat_password, setRepeatPassword] = useState<string | null>(null);
  const [type, setType] = useState<string | null>("CLIENTE");
  const [name, setName] = useState<string | null>();
  const [cpf, setCpf] = useState<string>('');
  const [image, setImage] = useState<any>(null);

  const [errors, setError] = useState(initialErrorsState);

  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result : any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

//   function getUser(){
//     const userData = user;

//     setName(userData.data.name) 
//     // setUserDescription(userData.data.description) 
//     // setUserOcupation(userData.data.occupation) 

//     console.log('Dados do usuario', userData)
//     // console.log('Dados do userName', userName)
// }

// useEffect(() => {
//     getUser();
// }, [])


  return (
    <Container>
        <ProfileImageContainer>
          { image !== null ? <ProfileImage source={{uri: image}}></ProfileImage> : <ProfileImage source={avatar}></ProfileImage> } 
          <PickImage onPress={pickImage}>
            <ImageLabel>Alterar imagem</ImageLabel>
          </PickImage>
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