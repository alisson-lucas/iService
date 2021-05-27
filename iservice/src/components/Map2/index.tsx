import React, {Component, useRef, useState, useEffect} from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import { Container, PopupContainer, PopupTitle, PopupProvider, PopupDescription, ButtonContainer, PopupButton, PopupButton2, ButtonText } from './styles';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


export default function Map2(){

    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    const navigation = useNavigation();


    function handleNavigateDetail(){
        navigation.navigate('Detail');
    };

    
    useEffect(() => {
        async function loadPosition() {
          const { status } = await Location.requestPermissionsAsync();
    
          if (status !== 'granted') {
            Alert.alert('Opa, houve um problema', 'Precisamos da sua Localização');
            return;
          }
    
          const location = await Location.getCurrentPositionAsync();
          const { latitude, longitude } = location.coords;
    
          setInitialPosition([latitude, longitude])
        }
        loadPosition();
    }, [])

    

    return(
        <Container>
            {initialPosition[0] != 0 && (
            <MapView initialRegion={{latitude:initialPosition[0], longitude:initialPosition[1], latitudeDelta: 0.004, longitudeDelta: 0.004}} style={styles.map}>
                    <Marker coordinate={{latitude: -7.951833 , longitude: -34.8777377}} onPress={handleNavigateDetail}>
                    {/* <Image style={styles.icone} source={Drone} /> */}
                        <Callout >
                            <View style={styles.callout} >
                                <Text style={styles.name}>Voo de Monitoramento de Temperatura</Text>
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={styles.local}>Mais informações...</Text>
                                </TouchableOpacity>
                            </View>
                        </Callout>
                    </Marker>
            </MapView>)
            }
                {/* <Modalize ref={modalizeRef} snapPoint={200} modalHeight={200}>
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
                </Modalize> */}
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
    }
});