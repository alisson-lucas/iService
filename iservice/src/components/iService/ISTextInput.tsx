import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import blueVersion from '../../styles/colors';

export const ISTextInput = ({
    label,
    value,
    error,
    ...props
}:any) => {

    return (
        <View style={styles.base}>
            {!!value && <Text style={error? styles.labelTextError : styles.labelText}>{label}</Text>}
            <TextInput style={error ? styles.inputError : styles.input} {...props} />
            {error && <Text style={styles.error}>{error}</Text>} 
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
        fontSize: 16,
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
        borderBottomWidth: 1,
        borderColor: blueVersion.lightGray,
    },
    inputError: {
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderColor: blueVersion.secondary,
        color: blueVersion.secondary,
    },
    error: {
        paddingHorizontal: 5,
        color: blueVersion.secondary,
        fontSize: 12,
    }
});