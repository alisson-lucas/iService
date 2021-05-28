import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    /* justify-content: center; */
    background-color: #fff;
`;

export const Text = styled.Text`
    margin-top: 67px;
    font-size: 15px;
`;

export const TextInput = styled.TextInput`
    width: 269px;
    height: 49px;
    border-radius: 50px;
    background-color: #EDEDED;
    margin-top: 22px;
    padding-left: 120px;
`;

export const SelectView = styled.View`
    width: 269px;
    height: 49px;
    border-radius: 50px;
    background-color: #EDEDED;
    padding: 15px 110px;
    margin-top: 22px;
    color: #fff;
    /* border-bottom-width: 1px;
    border-bottom-color: #444444;
    margin-bottom: 24px; */
`;

export const FormButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 46px;
    margin-top: 46px;
    background-color: #000080;
    border-radius: 8px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;