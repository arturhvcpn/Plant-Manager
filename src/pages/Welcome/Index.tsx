import React from 'react';
import { Container, Heading, WateringBackground } from  './styles'

import wateringImage from '../../images/watering.png';
import ButtonWelcome from '../../components/ButtonWelcome';
import ContentText from '../../components/ContentText';

function Welcome() {
    return(
        <Container>
            <Heading>Gerencie{'\n'}suas plantas{'\n'} de forma fácil</Heading>
            <WateringBackground source={wateringImage}/>
            <ContentText />
            <ButtonWelcome />
        </Container>
    );

}

export default Welcome;