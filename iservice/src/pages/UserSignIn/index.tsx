import React,{useState} from 'react';
import { View } from 'react-native';
import RNPickerSelector from 'react-native-picker-select';

import { Container, Text, TextInput, SelectView, FormButton, TextButton } from './styles';

export default function UserSignIn(){
    const [type, setType] = useState('');
  return (
    <Container>
        <Text>Insira seus dados para concluir o cadastro</Text>
        <TextInput placeholder="Login"></TextInput>
        <TextInput placeholder="Senha"></TextInput>
        <TextInput placeholder="Nome"></TextInput>
        <TextInput placeholder="Cpf"></TextInput>
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
        <FormButton>
            <TextButton>Cadastrar</TextButton>
        </FormButton>
    </Container>
  );
}

;