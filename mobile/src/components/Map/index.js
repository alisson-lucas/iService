import React, {Component, useState, useEffect} from 'react'
import MapView, { Marker, Callout } from 'react-native-maps'
import {View, StyleSheet, Text} from 'react-native'
import { Container, MapContainer } from './styles';

export default class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
           dataSource: [0],
           latitude: -13.6596529,
           longitude: -69.6865912,
           error: null
         }
    }

    componentDidMount(){
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


    render(){
        return (
            <Container>
                <MapView region={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: 0.04, longitudeDelta: 0.04}} style={styles.map}>
                    <Marker coordinate={this.state}/>
                    <Marker coordinate={{latitude: -8.094833 , longitude: -34.972750}}>
                    {/* <Image style={styles.icone} source={Drone} /> */}
    
                    <Callout >
                        <View style={styles.callout}>
                            <Text style={styles.name}>Voo de Monitoramento de Temperatura</Text>
                            <Text style={styles.local}>Jaboatão dos Guararapes</Text>
                            <Text styles={styles.piloto}>PcMarques</Text>
                        </View>
                    </Callout>
                    </Marker>
                </MapView>
            </Container>
        ) 
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
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