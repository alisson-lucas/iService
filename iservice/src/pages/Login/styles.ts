import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
export const FormContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LogoImage = styled.Image`
    margin-right: 20px;
`;

export const Text = styled.Text`
    margin-top: 67px;
    font-size: 15px;
`;

/*export const TextInput = styled.TextInput`
    width: 223px;
    height: 49px;
    border-radius: 50px;
    background-color: #EDEDED;
    margin-top: 22px;
    padding-left: 90px;
`;*/

export const FormButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 46px;
    margin-top: 26px;
    background-color: #000080;
    border-radius: 8px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const BtnPassword = styled.TouchableOpacity`
    margin-top: 64px;
`;

export const TextBottom = styled.Text`
    font-size: 12px;
    line-height: 14px;
    
`;

export const BtnSign = styled.TouchableOpacity`
    margin-top: 13px;
`;

export const TextInputBold = styled.Text`
    font-size: 12px;
    font-weight: bold;
    
`;