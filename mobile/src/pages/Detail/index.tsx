import React from 'react'
import { Alert } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons'

import { Container, Header, BackButton, DetailContainer, ProviderImage, DetailTitle, DetailProvider, DetailDescription, ButtonContainer, DetailButton, DetailButton2, ButtonText } from './styles';
import avatar from '../../../assets/images/misc/user-avatar.png';


const Detail = ({navigation, route}: any) => {
    const profissional =  route.params;
    const nav = useNavigation();
    
    const handleBackScreen = () => {
        nav.goBack();
    };

    const handleContact = (contact: string) => {
        Alert.alert(
            "Contato",
            contact,
            [
              { text: "OK" }
            ]
          );
    }
    return (
        <Container>
            <Header>
                <BackButton onPress={handleBackScreen}>
                    <Icon name="arrow-left" color="#000080" size={20}/>
                </BackButton>
            </Header>
            <DetailContainer>
                <ProviderImage source={avatar}></ProviderImage>
                <DetailTitle>{ profissional['name'] }</DetailTitle>
                <DetailProvider>{ profissional['cpf'] }</DetailProvider>
                <DetailDescription>{ profissional['description'] }</DetailDescription>
                <ButtonContainer>
                    <DetailButton>
                        <ButtonText>Favoritar</ButtonText>
                    </DetailButton>
                    <DetailButton2>
                        <ButtonText onPress={() => { handleContact(profissional['phone'])}}>Contato</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
            </DetailContainer>
        </Container>
    );
};
export default Detail;