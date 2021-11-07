import React, {useState} from 'react'
import { Alert } from "react-native";
import Modal from "react-native-modal";
import * as Linking from 'expo-linking';

import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons'

import { Container, Header, BackButton, DetailContainer, ProviderImage, DetailTitle, DetailProvider,
DetailDescription, ButtonContainer, DetailButton, DetailButton2, ButtonText,  ModalContainer, ContactContainer, ContactButtonContainer, ContactText, ContactNumber, ModalScroll,
BtnMenu, BtnMenuText, BtnPhone} from './styles';
import avatar from '../../../assets/images/misc/user-avatar.png';


const Detail = ({navigation, route}: any) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [professionalName, setProfessionalName] = useState<string | null>(null);
    const [professionalPhone, setProfessionalPhone] = useState<string | null>(null);
    const [professionalId, setProfessionalId] = useState<string | null>(null);


    const profissional =  route.params;
    const nav = useNavigation();
    
    const handleBackScreen = () => {
        nav.goBack();
    };

    const handleWhatsapp = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=55${profissional['phone']}&text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20iService%20saber%20mais%20sobre%20o%20seu%20trabalho.`);
    };

    const handlePhone = () => {
        Linking.openURL(`tel:${profissional['phone']}`);
    };

    const handleContact = (contact: string) => {
        setModalVisible(!isModalVisible);
    }

    const favoriteProfessional = () => {
        const proName = profissional['name'];
        const proPhone = profissional['phone'];

        const favoriteds = {
            proName,
            proPhone
        }

        console.log('favoritado = ', favoriteds  )
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
                    <DetailButton onPress={() => { favoriteProfessional() }}>
                        <ButtonText>Favoritar</ButtonText>
                    </DetailButton>
                    <DetailButton2>
                        <ButtonText onPress={() => { handleContact(profissional['phone'])}}>Contato</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
            </DetailContainer>
            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} >
                <ModalContainer>
                        <ContactContainer>
                            <ContactText>Contato</ContactText>
                            <ContactNumber>{profissional['phone']}</ContactNumber>
                        </ContactContainer>
                        <ContactButtonContainer>
                            <BtnMenu onPress={() => { handleWhatsapp() }}>
                                <BtnMenuText>Conversar via whatsapp</BtnMenuText>
                            </BtnMenu>
                            <BtnPhone onPress={() => { handlePhone() }}>
                                <BtnMenuText>Ligar</BtnMenuText>
                            </BtnPhone>
                        </ContactButtonContainer>
                </ModalContainer>
            </Modal>
        </Container>
    );
};
export default Detail;