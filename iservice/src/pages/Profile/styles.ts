import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const DetailContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    padding-bottom: 55%;
`;


export const ProviderImage = styled.Image`
    background-color: blue;
    width: 160px;
    height: 160px;
    border-radius: 80px;
    margin-top: 50px;
`;

export const DetailTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 20px;
`;

export const DetailProvider = styled.Text`
    font-size: 16px;
    margin-top: 80px;
`;

export const DetailDescription = styled.Text`
    font-size: 16px;
    margin-top: 10px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 35%;
    margin-bottom: 90px;
`;

// export const DetailButton = styled.TouchableOpacity`
//     background: #000080;
//     width: 150px;
//     align-items: center;
//     padding: 15px;
//     border-radius: 7px;
//     margin-left: 10px;
// `;

export const DetailButton2 = styled.TouchableOpacity`
    background: #000080;
    width: 180px;
    align-items: center;
    padding: 15px;
    border-radius: 7px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    
`;