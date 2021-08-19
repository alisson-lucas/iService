import React, {Component, useRef, useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import {View, StyleSheet, Text, TouchableOpacity, Alert, Image} from 'react-native'
import { Container, PopupContainer, PopupTitle, PopupProvider, PopupDescription, ButtonContainer, PopupButton, PopupButton2, ButtonText } from './styles';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { UserController } from '../../controllers/user.controller';

import point from '../../../assets/images/misc/marker.png';


export default function Map2(){

    const navigation = useNavigation();
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [profissionais, setProfissionais] = useState([]); 


    function handleNavigateDetail(){
        navigation.navigate('Detail');
    };

    async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Opa, houve um problema', 'Precisamos da sua Localização');
            return;
        }

        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        setInitialPosition([latitude, longitude]);
    }

    const getProfissionais = async () => {
        const response = (await UserController.getAllProfissionais()).data;
        setProfissionais(response);
    }

    useEffect(() => {
        loadPosition();
        getProfissionais();
    }, [])

    return(
        <Container>
            {initialPosition[0] != 0 && (
            <MapView 
                style={styles.map}
                provider={PROVIDER_GOOGLE} 
                initialRegion={
                    {
                        latitude:initialPosition[0], 
                        longitude:initialPosition[1], 
                        latitudeDelta: 0.004, 
                        longitudeDelta: 0.004
                    }
                }>
                    <Marker coordinate={{latitude: -7.951833 , longitude: -34.8777377}} onPress={handleNavigateDetail}>
                    <Image style={styles.icone} source={point} />
                        <Callout >
                            <View style={styles.callout} >
                                <Text style={styles.name}>Voo de Monitoramento de Temperatura</Text>
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={styles.local}>Mais informações...</Text>
                                </TouchableOpacity>
                            </View>
                        </Callout>
                    </Marker>
                    {
                        profissionais.map((profissional) => (
                            <Marker
                                key={profissional['id']}
                                coordinate={
                                    {
                                        latitude: profissional['lat'],
                                        longitude: profissional['lng']
                                    }
                                }
                            />
                        ))
                    }
            </MapView>)
            }
        </Container>
    );
}

const styles = StyleSheet.create({
    map: {
        width: 330,
        height: 430,
        borderRadius: 25
    },
    callout: {
        width: 260
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    },

    local: {
        color: '#666',
        marginTop: 5
    },

    piloto: {
        marginTop: 5
    },

    icone: {
        width: 54,
        height: 77,
    }

});