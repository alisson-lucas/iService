import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ISCheckbox } from './ISCheckbox';

import blueVersion from '../../styles/colors';

export const ISCheckboxGroup = ({
    label,
    options,
    selectedOptions,
}: any) => {

    const selectOption = (value: string, toAdd: boolean) => {
        if (toAdd) {
            return selectedOptions.push(value);
        }
        return selectedOptions.splice(selectedOptions.indexOf(value), 1);
    };

    return (
        <View style={styles.base}>
            <Text style={styles.labelText}>{label}</Text>
            {
                options.map((obj: any, i: any) => (
                    <ISCheckbox key={i} label={obj.label} disabled={obj.disabled || false} selectOption={selectOption} />
                ))
            }
        </View>
   );
};
  
const styles = StyleSheet.create({
    base: {
        width: '80%',
        height: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
   },
   labelText: {
        paddingStart: 5,
        paddingVertical: 10,
        fontSize: 14,
        paddingLeft: 2,
        color: blueVersion.lightGray,
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 5,
        borderColor: blueVersion.lightGray,
   },
});