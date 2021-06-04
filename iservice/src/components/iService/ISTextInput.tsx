import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import blueVersion from '../../styles/colors';

export const ISTextInput = ({
    label,
    value,
    errorMessage,
    ...props
}:any) => {

    return (
        <View style={styles.base}>
            {!!value && <Text style={errorMessage? styles.labelTextError : styles.labelText}>{label}</Text>}
            <TextInput style={errorMessage ? styles.inputError : styles.input} {...props} />
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>} 
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        width: '80%',
        height: 'auto',
        marginBottom: 15,
    },
    labelText: {
        paddingHorizontal: 5,
        fontSize: 14,
        color: blueVersion.lightGray
    },
    labelTextError: {
        paddingHorizontal: 5,
        fontSize: 16,
        color: blueVersion.secondary,
    },
    input: {
        fontSize: 14,
        paddingHorizontal: 5,
        //borderBottomWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomRightRadius: 5,
        //
        borderColor: blueVersion.lightGray,
    },
    inputError: {
        paddingHorizontal: 5,
        //borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 5,
        //
        borderColor: blueVersion.secondary,
        color: blueVersion.secondary,
    },
    error: {
        paddingHorizontal: 5,
        color: blueVersion.secondary,
        fontSize: 12,
    }
});