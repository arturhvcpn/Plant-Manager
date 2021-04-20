import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    justify-content:center;
`;

export const Heading = styled.Text`
    font-size:32;
    font-weight: bold;
    text-align:center;
    color:${colors.heading};
    margin-bottom:12;
`;

export const WateringBackground = styled.Image``;