import React, {Component, useRef, useState, useEffect} from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Container, PopupContainer, PopupTitle, PopupProvider, PopupDescription, ButtonContainer, PopupButton, PopupButton2, ButtonText } from './styles';
import { Modalize } from 'react-native-modalize';


export default function Map2({navigator}){

    const modalizeRef = useRef(null);

    const close = () => {
        modalizeRef.current?.close();
    }


    function onOpen() {
        modalizeRef.current?.open();
    };

    function getLocation(){
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
            },
            error => this.setState({ error: error.message}),
            { enableHighAccuracy: true, timeout: 2000, maximunAge: 2000 }
        );

        
    }

    const local = {
        latitude: -8.094833,
        longitude: -34.972750,
        
    }


    // componentDidMount(){
    //     navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude,
    //                 error: null
    //             });
    //         },
    //         error => this.setState({ error: error.message}),
    //         { enableHighAccuracy: true, timeout: 2000, maximunAge: 2000 }
    //     );
    // }

    return(
        <Container>
            <MapView region={{latitude: -7.9516511, longitude: -34.8751037, latitudeDelta: 0.04, longitudeDelta: 0.04}} style={styles.map}>
                        <TouchableOpacity onPress={onOpen} >
                    <Marker coordinate={{latitude: -8.094833 , longitude: -34.972750}}>
                    {/* <Image style={styles.icone} source={Drone} /> */}
                        <Callout >
                            <View style={styles.callout} >
                                <Text style={styles.name}>Voo de Monitoramento de Temperatura</Text>
                                <Text style={styles.local}>Jaboatão dos Guararapes</Text>
                                <Text styles={styles.piloto}>PcMarques</Text>
                            </View>
                        </Callout>
                    </Marker>
                        </TouchableOpacity>
            </MapView>
                <Modalize ref={modalizeRef} snapPoint={200} modalHeight={200}>
                    <PopupContainer>
                            <PopupTitle>Personal trainner</PopupTitle>
                            <PopupProvider>João Personal</PopupProvider>
                            <PopupDescription>Treinos de força, funcional e aeróbico</PopupDescription>
                            <ButtonContainer>
                                <PopupButton>
                                    <ButtonText>Whatsapp</ButtonText>
                                </PopupButton>
                                <PopupButton2>
                                    <ButtonText>E-mail</ButtonText>
                                </PopupButton2>
                            </ButtonContainer>
                    </PopupContainer>
                </Modalize>
        </Container>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 500,
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
    }
});