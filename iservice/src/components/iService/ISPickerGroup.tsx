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
         <Picker style={styles.picker} {...props}>
         {
            options.map((obj: any, i: any) => (
               <Picker.Item key={i} label={obj.label} value={obj.value} />
            ))
         }
         </Picker>
         <View style={styles.horizontalLine} />
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
      borderBottomWidth: 1,
   },
   labelText: {
      paddingHorizontal: 5,
      paddingVertical: 2,
      fontSize: 16,
      color: blueVersion.lightGray
   },
   horizontalLine: {
      borderBottomColor: blueVersion.lightGray,
      borderBottomWidth: 1,
   }
});