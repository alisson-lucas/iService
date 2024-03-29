import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #fff;
    flex: 1;
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitleContainer = styled.View`
    align-items: center
`;

export const Title = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #000;
    font-size: 20px;
    text-align: center;    
    font-weight: bold;
    margin-left: 135px;
`;

export const LabelContainer = styled.View`
    height: 90px;
`;

export const LabelTitle = styled.Text`
    margin-top: 20px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
`;

export const BtnContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

`

export const BtnFavorite = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 46px;
    border-radius: 8px;
    background-color: #000080;
`
export const BtnAvaliation = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 46px;
    border-radius: 8px;
    background-color: #000080;
`

export const BtnText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`
