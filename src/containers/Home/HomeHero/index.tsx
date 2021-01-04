import React, { FC } from 'react';
import "./HomeHero.scss"
import { homeHeroTexts } from 'utils';
import { HeroContainer, HeroWrapper, HomeRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img } from './HomeHeroElements';


const HomeHero: FC = () => {

 
    return (
        <HeroContainer lightBg>
            <HeroWrapper>
                <HomeRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{homeHeroTexts.title}</TopLine>
                            <Heading>Some heading</Heading>
                            <Subtitle>{homeHeroTexts.subtitle}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>
                </HomeRow>
            </HeroWrapper>
        </HeroContainer>
    );
}

export default HomeHero;