import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const ProfileImageContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -150px;
`;

export const ProfileImage = styled.Image`
  background-color: blue;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-top: 50px;
`;

export const ImageLabel = styled.Text`
  color: #0008ff;
  margin-bottom: 30px;
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
    font-size: 13px;
    font-weight: bold;
    color: #fff;
`;
