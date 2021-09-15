import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const Title = styled.Text`
    color: #000;
`;

export const SubTitle = styled.Text`
    color: #000;
    font-weight: bold;
`;

export const ConfirmButton = styled.TouchableOpacity`
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
    font-size: 13px;
    font-weight: bold;
    color: #fff;
`;

