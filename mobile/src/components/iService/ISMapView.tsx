import React, { useState, useEffect} from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import { UserController } from '../../controllers/user.controller';

import point from '../../../assets/images/misc/marker.png';

const ISMapView = () => {
    const navigation = useNavigation();
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
    const [profissionais, setProfissionais] = useState([]); 

    const handleNavigateDetail = (profissional: any) => {
        navigation.navigate('Detail', profissional);
    };

    const loadPosition = async() => {
        const { status } = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Opa, houve um problema', 'Precisamos da sua Localização');
            return;
        }

        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;

        console.log("Actual Lat Long = ", {latitude, longitude})
        //setInitialPosition([latitude, longitude]);
        setInitialPosition([-7.84252, -34.9085]);
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
        <View style={styles.view}>
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
                            >
                                <Image style={styles.icone} source={point} />
                                <Callout onPress={ () => handleNavigateDetail(profissional)}>
                                    <View style={styles.callout}>
                                        <Text style={styles.name}>{ profissional['name'] }</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.local}>
                                                {(profissional['occupation']).join(", ")}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Callout>
                            </Marker>
                        ))
                    }
            </MapView>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 50,
    },
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

export default ISMapView;