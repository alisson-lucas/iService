import React, { useState } from 'react';
import { ISCheckboxGroup } from '../../components/iService/ISCheckboxGroup';
import { useNavigation } from '@react-navigation/native';
import { ISPickerGroup } from '../../components/iService/ISPickerGroup';
import { ISRadioGroup } from '../../components/iService/ISRadioGroup';
import { ISTextInput } from '../../components/iService/ISTextInput';
import { UserController } from '../../controllers/user.controller';
import { Container, ScrollContainer, Text, FormButton, TextButton } from './styles';
import { StyleSheet } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
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

const userTypes = [
  { label: "Cliente", value: "CLIENTE" },
  { label: "Profissional", value: "PROFISSIONAL" }
];

const userGender = [
  { label: "Masculino", value: "M" },
  { label: "Feminino", value: "F" },
];

const userProfessions = [
  { label: "Encanador", disabled: false },
  { label: "Pedreiro", disabled: false },
  { label: "Eletricista", disabled: false },
];


const UserSignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [repeat_password, setRepeatPassword] = useState<string | null>(null);
  const [type, setType] = useState<string | null>("CLIENTE");
  const [name, setName] = useState<string | null>(null);
  const [cpf, setCpf] = useState<string>('');
  const [address, setAddress] = useState<string | null>(null);
  const [phone, setPhone] = useState<string>('');  
  const [gender, setGender] = useState<string | null>("M");
  const [description, setDescription] = useState<string | null>(null);
  const occupation: string[] = [];

  const [errors, setError] = useState(initialErrorsState);

  const signUser = () => {
    
    const newUser = {
      username,
      password,
      repeat_password,
      type,
      name,
      cpf,
      address,
      phone,
      gender,
      description,
      occupation
    };
    console.log("Tentando registrar: ", newUser);

    UserController.register(newUser).then((response) => {
      if (response.error) {
        setError( { ...errors, [response.error.field]: response.error.message });
        console.log("Erros Mapeados", errors);
      } else { 
        navigation.navigate('Login');
      }

    });
  };

  return (
    <ScrollContainer>
      <Container>
          <Text>Insira seus dados para concluir o cadastro</Text>
          <ISRadioGroup options={userTypes} formHorizontal={true} onPress={(value: string) => setType(value)} />
          <ISTextInput label={"Username"} errorMessage={errors.username} placeholder={"Email"} value={username} onChangeText={(value: string) => { setUsername(value); setError( { ...errors, username : null})}} />
          <ISTextInput label={"Senha"} errorMessage={errors.password} placeholder={"Senha"} value={password} onChangeText={(value: string) => { setPassword(value); setError( { ...errors, password : null})}} secureTextEntry={true} />
          <ISTextInput label={"Repetir Senha"} errorMessage={errors.password} placeholder={"Repetir senha"} value={repeat_password} onChangeText={(value: string) => setRepeatPassword(value)} secureTextEntry={true} />
          <ISTextInput label={"Nome"} errorMessage={errors.name} placeholder={"Nome"} value={name} onChangeText={(value: string) => setName(value)} />
          {/* <ISTextInput label={"CPF"} errorMessage={errors.cpf} placeholder={"CPF"} value={cpf} onChangeText={(value: string) => setCpf(value)} keyboardType={"numeric"} /> */}
          <TextInputMask style={styles.input} placeholder={'CPF'} type={'cpf'} value={cpf} onChangeText={(value: string) => setCpf(value)} />
          {type == "PROFISSIONAL" && 
            <>
              <ISTextInput label={"Endereco"} errorMessage={errors.address} placeholder={"Endereco"} value={address} onChangeText={(value: string) => setAddress(value)}/>
              {/* <ISTextInput label={"Telefone"} errorMessage={errors.phone} placeholder={"Telefone"} value={phone} onChangeText={(value: string) => setPhone(value)} keyboardType={"numeric"} /> */}
              <TextInputMask style={styles.input} placeholder={'Telefone'} type={'cel-phone'} value={phone} onChangeText={(value: string) => setPhone(value)} keyboardType={"numeric"} />
              <ISTextInput label={"Sobre"} errorMessage={errors.description} placeholder={"Fale um pouco sobre suas funcoes"} value={description} onChangeText={(value: string) => setDescription(value)} multiline={true} />
              <ISPickerGroup label={"Genero"} options={userGender} onValueChange={(value: string, i: any) => setGender(value)} />
              {/* <ISCheckboxGroup label={"Profissoes"} errorMessage={errors.occupation} options={userProfessions} selectedOptions={occupation}/> */}
            </> 
          }
          
          <FormButton >
              <TextButton onPress={signUser}>Cadastrar</TextButton>
          </FormButton>
      </Container>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingHorizontal: 5,
    // borderBottomWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 5,
    width: '80%',
    marginBottom: 15,
    //
    borderColor: blueVersion.lightGray,
},
})

export default UserSignIn;