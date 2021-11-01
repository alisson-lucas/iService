import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
`;

export const HeaderContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    margin: 30px 0px 10px 0;
`;

export const BodyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* height: 200px; */
    /* background-color: #008080; */
`;

export const CardEmail = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 220px;
    width: 80%;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
`;

export const CardPassword = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 270px;
    width: 80%;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
`;

export const Title = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 16px;
`;

export const SubTitle = styled.Text`
    color: #000;
    font-weight: bold;
    margin-top: 15px;
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

