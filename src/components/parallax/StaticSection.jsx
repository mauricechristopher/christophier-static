import React from 'react';
import { StyledStaticSection } from './StyledSection';

const StaticSection = (props) => (
    <StyledStaticSection className={props.className}>{props.children}</StyledStaticSection>
);

export default StaticSection;
