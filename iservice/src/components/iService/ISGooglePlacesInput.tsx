import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import {StyleSheet } from 'react-native';

import { Input } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBSJOzsaShzBRemQ5PD8P_AL97E1AoZm4Y';

// console.disableYellowBox = true; //disabled yellow warning
LogBox.ignoreAllLogs(true) //disabled yellow warning

const ISGooglePlacesInput = ({
  setLatLng,
}: any) => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  
  useEffect(() => {
    setLatLng(lat, lng)
  },[lat, lng]);

  const addressInfo = (data: any, details: any) => {
    setLat(details?.geometry?.location?.lat);
    setLng(details?.geometry?.location?.lng);
  }

  return (
    <GooglePlacesAutocomplete
      placeholder='Endereco'
      fetchDetails={true}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: 'en', // language of the results
      }}
      onPress={addressInfo}
      enablePoweredByContainer={false}
      textInputProps={{
        InputComp: Input,
        errorStyle: { color: 'red' },
      }}
      styles={{
        textInputContainer : {
          paddingLeft: 27,
          paddingRight: 27
        },
        textInput: {
          borderRightWidth: 1,
          borderBottomWidth: 1,
          borderBottomRightRadius: 5,
          height: 5
        } 
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 100
  }
});

export default ISGooglePlacesInput;