import React, {Component, useRef, useState, useEffect, useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header,SettingsButton,DetailContainer, DetailProviderOccupations, ProviderImage, DetailTitle,
    DetailProvider, DetailDescription, ButtonContainer, DetailButton2, ButtonText, ModalContainer, ModalScroll,
    BtnMenu, BtnMenuText } from './styles';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons'
import AuthContext from '../../contexts/auth';
import Modal from "react-native-modal";


import avatar from '../../../assets/images/misc/user-avatar.png';

import Menu from '../Menu'

export default function Profile(){
    const { user, setUser }  = useContext(AuthContext)
    const [type, setType] = useState<string | null>("CLIENTE");
    const [userName, setUserName] = useState<string | null>('');
    const [userDescription, setUserDescription] = useState<string | null>('');
    const [userOcupation, setUserOcupation] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    
    function handleBackScreen(){
        navigation.goBack();
    };

    function handleUpdateUser(){
        navigation.navigate('UpdateUser');
    };

    function handleLogin(){
        navigation.navigate('UserLogin');
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    // function handleMenu(){
    //     navigation.navigate('Menu');
    // };

    function getUser(){
        const userData : any = user;

        setUserName(userData.data.name) 
        setUserDescription(userData.data.description) 
        setUserOcupation(userData.data.occupation) 
        setType(userData.data.type)

        console.log('Dados do usuario', userData)
        console.log('Dados do userName', userName)
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Container>
                {/* <Menu/> */}
            <Header>
                <SettingsButton onPress={toggleModal} >
                    <Icon name="settings" color="#000080" size={25}/>
                </SettingsButton>
            </Header>
            <DetailContainer>
                <ProviderImage source={avatar}></ProviderImage>
                <DetailTitle>{userName}</DetailTitle>
                <DetailDescription>{userDescription}</DetailDescription>
                { type == "PROFISSIONAL" && 
                    <>
                        <DetailProvider>Áreas de atuação :</DetailProvider>
                        <DetailProviderOccupations>{userOcupation.join(", ")}</DetailProviderOccupations>
                    </>
                }
                <ButtonContainer>
                    <DetailButton2 onPress={handleUpdateUser}>
                        <ButtonText>Alterar informações</ButtonText>
                    </DetailButton2>
                </ButtonContainer>
            </DetailContainer>
            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} animationIn='slideInRight' animationOut='slideOutRight'>
                <ModalContainer>
                    <ModalScroll>
                        <BtnMenu onPress={handleLogin}>
                            <BtnMenuText>Sair</BtnMenuText>
                        </BtnMenu>
                    </ModalScroll>
                </ModalContainer>
            </Modal>
        </Container>
    );
};

