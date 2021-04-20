import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const Title = styled.Text`
    text-align:center;
    font-size:18;
    padding-horizontal:20;
    color: ${colors.heading}

`;
