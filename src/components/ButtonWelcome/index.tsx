import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Content } from './styles';

interface ButtonWelcomeProps extends TouchableOpacityProps {
    name?:string | '>';
}

const ButtonWelcome: React.FC<ButtonWelcomeProps> = ({ name, ...rest }:ButtonWelcomeProps) => {
    return(
        <Container 
        activeOpacity={0.7} 
        {...rest}
        >
            <Content>{name ?? '>'}</Content>
        </Container>
    );
}


export default ButtonWelcome;