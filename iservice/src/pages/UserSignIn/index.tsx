import React,{useState, useEffect} from 'react';
import { View, Alert, Platform } from 'react-native';
import RNPickerSelector from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { apiProfissoes, API } from '../../services/api';

import { Container, ScrollContainer, Text, TextInput, SelectView, FormButton, TextButton } from './styles';

export default function UserSignIn(){
  const [isProfessional, setIsProfessional] = useState(false);
  const [radioValue, setRadioValue] = useState('CLIENTE');
  const [profession, setProfession] = useState(['']);
  const [professionChoosed, setProfessionChoosed] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    apiProfissoes.get(`v1?callback=CALLBACK_JSONP&s=${setProfession}`).then(
      response => {
        // setProfessionChoosed(response.data)
        // console.log(response.request)
      }
    )
  },[profession]);

  function signUser(){
    const postData = {
      type:radioValue,
      username:email,
      password,
      repeat_password:repeatPassword,
      name,
      cpf,
      phone,
      gender,
      occupation:profession
    }

    console.log("objeto enviado = {}",postData);
    API.post('users/register', postData).then(
      response => {
        setRadioValue('')
        setEmail('')
        setPassword('')
        setRepeatPassword('')
        setName('')
        setCpf('')
        setPhone('')
        setGender('')
        setProfession([''])
        console.log(response)
        navigation.navigate('Search');
      }


    ).catch(error => {
      console.log("erro={}",error.response.data);
    })
  };

  var profissoes = [
    {label: 'Cliente', value: 'CLIENTE' },
    {label: 'Profissional', value: 'PROFISSIONAL' }
  ];

  return (
    <ScrollContainer>
      <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Text>Insira seus dados para concluir o cadastro</Text>
          <RadioForm 
          radio_props={profissoes}
          initial={0}
          formHorizontal={true}
          buttonColor={'#000080'}
          onPress={(value) => {
              if(value === 'PROFISSIONAL'){
                setRadioValue(value)
                setIsProfessional(true)
                console.log("valor do radio = ", value)
              } else {
                setRadioValue(value)
                setIsProfessional(false)
                console.log("valor do radio = ", value)
              }
            }
          }
          />
          <TextInput placeholder="Email" onChangeText={value => setEmail(value)}></TextInput>
          <TextInput placeholder="Senha" secureTextEntry={true} onChangeText={value => setPassword(value)}></TextInput>
          <TextInput placeholder="Repetir senha" secureTextEntry={true} onChangeText={value => setRepeatPassword(value)}></TextInput>
          <TextInput placeholder="Nome" onChangeText={value => setName(value)}></TextInput>
          <TextInput placeholder="Cpf" onChangeText={value => setCpf(value)}></TextInput>
          {isProfessional ? 
            <>
              <TextInput placeholder="Telefone" keyboardType="numeric" onChangeText={value => setPhone(value)}></TextInput>
              <SelectView>
              <RNPickerSelector

                  onValueChange={(value) => setGender(value)}

                  items={[
                  { label: 'Masculino', value: 'M', color: '#000' },
                  { label: 'Feminino', value: 'F', color: '#000' },
                  ]}

                  style={{ inputAndroid: { color: '#000' }, inputIOS: { color: '#000' } }}

                  placeholder={{ label: 'Gênero', value: ''}}
                  />
              </SelectView>
              <TextInput placeholder="Profissão"  onChangeText={value => setProfession([value])}></TextInput>
            </> : <></>
          }
          

          <FormButton onPress={signUser}>
              <TextButton>Cadastrar</TextButton>
          </FormButton>
      </Container>
    </ScrollContainer>
  );
}

;