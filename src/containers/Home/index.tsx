import React, { FC } from 'react';
import { PageTitle } from 'components';
import HomeHero from './HomeHero/HeroSection';

const Home: FC = () => {
    return (
        <>
            <PageTitle title='HOME' />
            <HomeHero />
        </>
    );
}

export default Home;