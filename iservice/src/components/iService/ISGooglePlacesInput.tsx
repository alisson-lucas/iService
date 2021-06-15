import React, { useState, useEffect } from 'react';

import { Input } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBSJOzsaShzBRemQ5PD8P_AL97E1AoZm4Y';

console.disableYellowBox = true; //disabled yellow warning

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
      textInputProps={{
        InputComp: Input,
        errorStyle: { color: 'red' },
      }}
    />
  );
};

export default ISGooglePlacesInput;