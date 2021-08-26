import React, { useState, useEffect, useContext } from 'react';
import { View, Platform, Image, TextInput, StyleSheet } from 'react-native';
import { ISTextInput } from '../../components/iService/ISTextInput';
import * as ImagePicker from 'expo-image-picker';
import AuthContext from '../../contexts/auth';
import ISGooglePlacesInput from '../../components/iService/ISGooglePlacesInput';

import { Container, ProfileImage, ProfileImageContainer, PickImage, ImageLabel, FormButton, TextButton } from './styles';

import avatar from '../../../assets/images/misc/user-avatar.png';

import blueVersion from '../../styles/colors';

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
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [repeat_password, setRepeatPassword] = useState<string>();
  const [type, setType] = useState<string | null>("CLIENTE");
  const [name, setName] = useState<string>();
  const [cpf, setCpf] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [id, setId] = useState<number>();
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [address, setAddress] = useState<string>();
  

  const [image, setImage] = useState<any>(null);

  const [errors, setError] = useState(initialErrorsState);

  const setLatLng = (lat: any, lng: any) => {
    setLat(lat);
    setLng(lng);
  };

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

  function getUser(){
    const userData : any = user;

    setType(userData.data.type)
    setName(userData.data.name) 
    setUsername(userData.data.username)
    setCpf(userData.data.cpf)
    setPhone(userData.data.phone)
    setId(userData.data.id)
    setLat(userData.data.lat)
    setLng(userData.data.lng)
    setAddress(userData.data.address)
    // setUserDescription(userData.data.description) 
    // setUserOccupation(userData.data.occupation) 

    console.log('Dados do usuario', userData)
    console.log('Dados do teste', userData.data.name)
}

useEffect(() => {
    getUser();
}, [])


  return (
    <Container>
        <ProfileImageContainer>
          { image !== null ? <ProfileImage source={{uri: image}}></ProfileImage> : <ProfileImage source={avatar}></ProfileImage> } 
          <PickImage onPress={pickImage}>
            <ImageLabel>Alterar imagem</ImageLabel>
          </PickImage>
        </ProfileImageContainer>
          {/* <TextInput style={styles.input}  placeholder={"teste"} value={name} onChangeText={(value: string) => setName(value)}></TextInput> */}
          <TextInput style={styles.input}  placeholder={"Nome"} value={name} onChangeText={(value: string) => setName(value)} />
          <TextInput style={styles.input}  placeholder={"Email"} value={username} onChangeText={(value: string) => { setUsername(value); setError( { ...errors, username : null})}} />
          <TextInput style={styles.input}  placeholder={"Senha"} value={password} onChangeText={(value: string) => { setPassword(value); setError( { ...errors, password : null})}} secureTextEntry={true} />
          <TextInput style={styles.input}  placeholder={"Repetir senha"} value={repeat_password} onChangeText={(value: string) => setRepeatPassword(value)} secureTextEntry={true} />
          { type == "PROFISSIONAL" &&
            <>
              <TextInput style={styles.input}  placeholder={"Cpf"} value={cpf} onChangeText={(value: string) => setCpf(value)}/>
              <TextInput style={styles.input}  placeholder={"Telefone"} value={phone} onChangeText={(value: string) => setPhone(value)}/>
              {/* <ISGooglePlacesInput value={address} setLatLng={setLatLng}/> */}
            </>
          }
          
          <FormButton>
            <TextButton>Atualizar Informações</TextButton>
          </FormButton>
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
    marginTop: 15
},
});

export default updateUser;