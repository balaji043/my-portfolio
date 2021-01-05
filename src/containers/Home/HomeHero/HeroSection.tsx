import { DeveloperActivity } from 'components/Icons';
import React, { FC } from 'react';
import { homeHeroTexts } from 'utils';
import { workPageItem } from 'utils/pages';
import { HeroContainer, HeroWrapper, HomeRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, Button, ButtonWrapper } from './HomeHeroElements';


const HomeHero: FC = () => {
    return (
        <HeroContainer lightBg>
            <HeroWrapper>
                <HomeRow >
                    <Column1>
                        <TextWrapper>
                            <Heading>{homeHeroTexts.heading}</Heading>
                            <Subtitle>{homeHeroTexts.subtitle}</Subtitle>
                        </TextWrapper>
                        <ButtonWrapper>
                            <Button to={workPageItem.to} >See me works</Button>
                        </ButtonWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={DeveloperActivity} />
                        </ImgWrap>
                    </Column2>
                </HomeRow>
            </HeroWrapper>
        </HeroContainer>
    );
}

export default HomeHero;