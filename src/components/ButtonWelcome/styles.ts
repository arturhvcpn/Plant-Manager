import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity` 
    justify-content:center;
    align-items:center;

    background-color: ${colors.green};
    
    border-radius:16px;
    margin-bottom:8px;
    
    height:56;
    width:56;
`;

export const Content = styled.Text`
    color: ${colors.white};
    font-size:24;
`;
