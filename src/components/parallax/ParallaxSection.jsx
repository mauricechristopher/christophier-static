import { StyledParallaxSection } from './StyledSection';
import React from 'react';

const ParallaxSection = (props) => {
    console.log(props.pic);
    return (
        <StyledParallaxSection pic={props.pic}>
            {props.children}
        </StyledParallaxSection>
    );
}

export default ParallaxSection;
