import React, { FC } from 'react';
import { PageTitle } from 'components';
import HomeHero from './HomeHero';
import About from './About';



const Home: FC = () => {
    return (
        <>
            <PageTitle />
            <HomeHero />
            <About />
        </>
    );
}

export default Home;