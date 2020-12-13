import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    border-top-left-radius: 50px ;
`;

export const PopupContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const PopupTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
`;

export const PopupProvider = styled.Text`
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
`;

export const PopupDescription = styled.Text`
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
`;

export const PopupButton = styled.TouchableOpacity`
    background: #000080;
    width: 150px;
    align-items: center;
    padding: 15px;
    border-radius: 7px;
    margin-top: 20px;
    margin-left: 10px;
`;

export const PopupButton2 = styled.TouchableOpacity`
    background: #000080;
    width: 150px;
    align-items: center;
    padding: 15px;
    border-radius: 7px;
    margin-top: 20px;
    margin-left: 10px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    
`;