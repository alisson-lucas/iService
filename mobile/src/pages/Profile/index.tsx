import React, {Component, useRef, useState, useEffect, useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header,BackButton,DetailContainer, DetailProviderOccupations, ProviderImage, DetailTitle, DetailProvider, DetailDescription, ButtonContainer, DetailButton2, ButtonText } from './styles';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons'
import AuthContext from '../../contexts/auth';

import avatar from '../../../assets/images/misc/user-avatar.png';

export default function Profile(){
    const { user, setUser }  = useContext(AuthContext)
    const [type, setType] = useState<string | null>("CLIENTE");
    const [userName, setUserName] = useState<string | null>('');
    const [userDescription, setUserDescription] = useState<string | null>('');
    const [userOcupation, setUserOcupation] = useState([]);

    const navigation = useNavigation();

    
    function handleBackScreen(){
        navigation.goBack();
    };

    function handleUpdateUser(){
        navigation.navigate('UpdateUser');
    };

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
        </Container>
    );
};

