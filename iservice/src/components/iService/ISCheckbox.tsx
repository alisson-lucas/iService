import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import blueVersion from '../../styles/colors';

export const ISCheckbox = ({
   label,
   selectOption,
   ...props
}: any) => {

   const [toggleCheckBox, setToggleCheckBox] = useState(false);

   return (
      <View style={styles.base}>
         <CheckBox
            tintColors={{ true: blueVersion.blue }}
            value={toggleCheckBox}
            onValueChange={(newValue) => { 
               setToggleCheckBox(newValue);
               selectOption(label, newValue);
            }}
            {...props}
         />
         <Text style={styles.labelText}>{label}</Text>
      </View>
   );
};
  
const styles = StyleSheet.create({
   base: {
      width: '80%',
      height: 'auto',
      flex: 1,
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'row',
   },
   labelText: {
      paddingHorizontal: 5,
      paddingVertical: 2,
      fontSize: 16,
      marginTop: 5,
      paddingLeft: 2,
      color: blueVersion.lightGray
   }
});