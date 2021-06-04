import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import blueVersion from '../../styles/colors';

export const ISPickerGroup = ({
   options,
   label,
   ...props
}: any) => {

   return (
      <View style={styles.base}>
         <Text style={styles.labelText}>{label}</Text>
         <View style={styles.pickerView}>
            <Picker style={styles.picker}  {...props}>
            {
               options.map((obj: any, i: any) => (
                  <Picker.Item key={i} label={obj.label} value={obj.value} />
               ))
            }
            </Picker>
         </View>
      </View>
   );
};
  
const styles = StyleSheet.create({
   base: {
      width: '80%',
      height: 'auto',
      flex: 1,
      marginBottom: 40,
   },
   picker: {
      width: '100%',
      height: '100%',
   },
   labelText: {
      paddingHorizontal: 5,
      paddingVertical: 2,
      fontSize: 14,
      color: blueVersion.lightGray,
   },
   pickerView: {
      borderRightWidth: 1, 
      borderBottomWidth: 1, 
      borderBottomRightRadius: 5,
      paddingBottom: 10,
      borderColor: blueVersion.lightGray,
   }
});