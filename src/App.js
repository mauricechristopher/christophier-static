import React from 'react';
import Wrapper from './components/Wrapper';
import ParallaxSection from './components/ParallaxSection';
import StaticSection from './components/StaticSection';
import NavBar from './components/nav'

const App = () => (
    <>
        <NavBar />

        <Wrapper>

            <ParallaxSection pic='https://i.ibb.co/M5CBFb8/entrance.jpg'>
              
            </ParallaxSection>

            <StaticSection />

            <ParallaxSection pic='https://i.ibb.co/M9sXZxJ/shirt-fabrics.jpg' />

            <StaticSection />

            <ParallaxSection pic='https://i.ibb.co/Q9mJ79J/tie-display-desktop.jpg' />

            <StaticSection />

            <ParallaxSection pic='https://i.ibb.co/DGXGB7j/suit-fabrics.jpg' />

        </Wrapper>
    </>
 );


export default App;
