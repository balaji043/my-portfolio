import React, { FC } from 'react';
import { PageTitle } from 'components';
import HomeHero from './HomeHero/HeroSection';
import RecentWorks from './RecentWorks';

const Home: FC = () => {
    return (
        <>
            <PageTitle title='HOME' />
            <HomeHero />
            <RecentWorks />
        </>
    );
}

export default Home;