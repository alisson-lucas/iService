import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    /* flex: 1; */
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    margin-left: 50%;
    z-index: 1;

`;

export const MenuContainer = styled.View`
    background-color: #000;
    width: 100%;
`;

export const BtnMenu = styled.TouchableOpacity`
    background-color: #c0c0c0;
    height: 50px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnMenuText = styled.Text`
    color: #800000;
    font-size: 16px;
    /* font-weight: bold; */
`