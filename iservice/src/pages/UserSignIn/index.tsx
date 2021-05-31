import React,{useState} from 'react';
import { View, Alert } from 'react-native';
import RNPickerSelector from 'react-native-picker-select';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Container, ScrollContainer, Text, TextInput, SelectView, FormButton, TextButton } from './styles';

export default function UserSignIn(){
  const [type, setType] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  var profissoes = [
    {label: 'Cliente', value: 'Cliente' },
    {label: 'Profissional', value: 'Profissional' }
  ];

  return (
    <ScrollContainer>
      <Container>
          <Text>Insira seus dados para concluir o cadastro</Text>
          <RadioForm 
          radio_props={profissoes}
          initial={0}
          formHorizontal={true}
          buttonColor={'#000080'}
          onPress={(value) => {
              if(value === 'Profissional'){
                setRadioValue(value)
                setIsProfessional(true)
              } else {
                setRadioValue(value)
                setIsProfessional(false)
              }
            }
          }
          />
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Senha"></TextInput>
          <TextInput placeholder="Repetir senha"></TextInput>
          <TextInput placeholder="Nome"></TextInput>
          <TextInput placeholder="Cpf"></TextInput>
          {isProfessional ? 
            <>
              <TextInput placeholder="Telefone" keyboardType="numeric"></TextInput>
              <SelectView>
              <RNPickerSelector

                  onValueChange={(value) => setType(value)}

                  items={[
                  { label: 'Masculino', value: 'Masculino', color: '#000' },
                  { label: 'Feminino', value: 'Feminino', color: '#000' },
                  ]}

                  style={{ inputAndroid: { color: '#000' }, inputIOS: { color: '#000' } }}

                  placeholder={{ label: 'Gênero', value: ''}}
                  />
              </SelectView>
            </> : <></>
          }
          

          <FormButton>
              <TextButton>Cadastrar</TextButton>
          </FormButton>
      </Container>
    </ScrollContainer>
  );
}

;