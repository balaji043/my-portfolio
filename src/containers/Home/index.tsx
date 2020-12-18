import React, { FC } from 'react';
import { PageTitle } from 'components';
import HomeHero from './HomeHero';
import About from './About';

interface ComponentProps {
    className?: string;
}

const Home: FC<ComponentProps> = ({ className }: ComponentProps) => {
    return (
        <>
            <PageTitle />
            <HomeHero />
            <About />
        </>
    );
}

export default Home;