import React,{useState} from 'react';
import { View } from 'react-native';
import RNPickerSelector from 'react-native-picker-select';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Container, ScrollContainer, Text, TextInput, SelectView, FormButton, TextButton } from './styles';

export default function UserSignIn(){
  const [type, setType] = useState('');

  var radio_props = [
    {label: 'Cliente', value: 0 },
    {label: 'Profissional', value: 1 }
  ];

  return (
    <ScrollContainer>
      <Container>
          <Text>Insira seus dados para concluir o cadastro</Text>
          <RadioForm 
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          buttonColor={'#000080'}
          onPress={() => {
            if(radio_props.length === 2) {

              return (
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
                </>
              )
            }
          }}
          />
          <TextInput placeholder="Login"></TextInput>
          <TextInput placeholder="Senha"></TextInput>
          <TextInput placeholder="Repetir senha"></TextInput>
          <TextInput placeholder="Nome"></TextInput>
          <TextInput placeholder="Cpf"></TextInput>
          

          <FormButton>
              <TextButton>Cadastrar</TextButton>
          </FormButton>
      </Container>
    </ScrollContainer>
  );
}

;