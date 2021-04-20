import React from 'react';
import { Container, Title } from './styles';

interface ContentTextProps {
    title?:string;
}

const ContentText: React.FC<ContentTextProps> = ({ title }:ContentTextProps) => {
    return(
        <Container>
            <Title>{
            title ?? 
            'Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.'
            }</Title>
        </Container>
    );
}


export default ContentText;