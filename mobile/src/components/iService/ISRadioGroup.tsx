import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import blueVersion from '../../styles/colors';

export const ISRadioGroup = ({
    formHorizontal,
    options,
    onPress
}: any) => {
    const [option, setOption] = useState(0);

    return (
        <View style={styles.base}>
            <RadioForm formHorizontal={formHorizontal} animation={true}>
                {
                    options.map((obj: any, i: any) => (
                        <RadioButton labelHorizontal={true} key={i} >
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                onPress={() => {
                                    setOption(i);
                                    onPress(obj.value);
                                }}
                                buttonInnerColor={blueVersion.lightGray}
                                buttonOuterColor={option == i ? blueVersion.blue : blueVersion.white}
                                buttonWrapStyle={{marginLeft: 30}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                buttonStyle={{ 
                                    backgroundColor: option == i ? blueVersion.blue : blueVersion.white,
                                    borderWidth: 2,
                                    borderColor: option == i ? blueVersion.blue : blueVersion.lightGray
                                }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={() => {
                                    setOption(i);
                                    onPress(obj.value);
                                }}
                                labelHorizontal={true}
                                labelStyle={{fontSize: 14, color: blueVersion.black }}
                            />
                        </RadioButton>
                    ))
                }  
                </RadioForm>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        width: '80%',
        height: 'auto',
        marginBottom: 15,
        marginTop: 15,
        flex: 1,
        alignItems: 'center',
    },
});