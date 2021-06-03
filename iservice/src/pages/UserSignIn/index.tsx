import React, { useState } from 'react';
import { ISPickerGroup } from '../../components/iService/ISPickerGroup';
import { ISRadioGroup } from '../../components/iService/ISRadioGroup';

import { ISTextInput } from '../../components/iService/ISTextInput';

import { UserController } from '../../controllers/user.controller';

import { Container, ScrollContainer, Text, TextInput, FormButton, TextButton } from './styles';

const userTypes = [
  { label: "Cliente", value: "CLIENTE" },
  { label: "Profissional", value: "PROFISSIONAL" }
];

const userGender = [
  { label: 'Masculino', value: 'M' },
  { label: 'Feminino', value: 'F' },
];

const UserSignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");  
  const [gender, setGender] = useState("M");
  const [description, setDescription] = useState("");
  const [occupation, setOcuppation] = useState([]);

  const [errorUsername, setErrorUsername] = useState(null);
  

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
    
    //UserController.register(newUser).then((response) => {
      setErrorUsername("Mensagem de error");
    //})
  };

  return (
    <ScrollContainer>
      <Container>
          <Text>Insira seus dados para concluir o cadastro</Text>
          <ISRadioGroup options={userTypes} formHorizontal={true} onPress={(value: string) => setType(value)} />
          <ISTextInput label={"Username"} error={errorUsername} placeholder={"Email"} value={username} onChangeText={(value: string) => setUsername(value)} />
          <ISTextInput label={"Senha"} placeholder={"Senha"} value={password} onChangeText={(value: string) => setPassword(value)} secureTextEntry={true} />
          <ISTextInput label={"Repetir Senha"} placeholder={"Repetir senha"} value={repeat_password} onChangeText={(value: string) => setRepeatPassword(value)} secureTextEntry={true} />
          <ISTextInput label={"Nome"} placeholder={"Nome"} value={name} onChangeText={(value: string) => setName(value)} />
          <ISTextInput label={"Cpf"} placeholder={"CPF"} value={cpf} onChangeText={(value: string) => setCpf(value)} keyboardType={"numeric"} />

          {type == "PROFISSIONAL" && 
            <>
              <ISPickerGroup label={"Genero"} options={userGender} onValueChange={(value: string, i: any) => setGender(value)} />
              <ISTextInput label={"Endereco"} placeholder={"Endereco"} value={address} onChangeText={(value: string) => setAddress(value)}/>
              <ISTextInput label={"Telefone"} placeholder={"Telefone"} value={phone} onChangeText={(value: string) => setPhone(value)} keyboardType={"numeric"} />
              <ISTextInput label={"Sobre"} placeholder={"Fale um pouco sobre suas funcoes"} value={description} onChangeText={(value: string) => setDescription(value)} multiline={true} />
            </> 
          }
          

          <FormButton >
              <TextButton onPress={signUser}>Cadastrar</TextButton>
          </FormButton>
      </Container>
    </ScrollContainer>
  );
};

export default UserSignIn;