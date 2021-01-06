import { Programmer } from 'components/Icons';
import React, { FC } from 'react';
import { homeHeroTexts } from 'utils';
import { workPageItem } from 'utils/pages';
import { HeroContainer, HomeRow, Column1, TextWrapper, Heading, Subtitle, Column2, ImgWrap, Img, Button, ButtonWrapper, ButtonBackground, ButtonIcon } from './HomeHeroElements';


const HomeHero: FC =
    () => (
        <HeroContainer lightBg={true}>
            <HomeRow >
                <Column1>
                    <TextWrapper>
                        <Heading>{homeHeroTexts.heading}</Heading>
                        <Subtitle>{homeHeroTexts.subtitle}</Subtitle>
                    </TextWrapper>
                    <ButtonWrapper>
                        <ButtonBackground />
                        <Button to={workPageItem.to} >See me works
                            {(<ButtonIcon />)}
                        </Button>
                    </ButtonWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Programmer} />
                    </ImgWrap>
                </Column2>
            </HomeRow>
        </HeroContainer>
    );

export default HomeHero;