import { Programmer } from 'components/Icons';
import React, { FC } from 'react';
import { homeHeroTexts } from 'utils';
import { workPageItem } from 'utils/pages';
import { github, linkedin } from 'utils/social-media';
import { HeroContainer, HomeRow, Column1, TextWrapper, Heading, Subtitle, Column2, ImgWrap, Img, Button, ButtonWrapper, ButtonBackground, ButtonIcon, SocialMediaLink, SocialMediaWrapper, Separator } from './HomeHeroElements';


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
                        <Button to={workPageItem.to} >{workPageItem.btnText}
                            {<ButtonIcon />}
                            {<ButtonBackground lightBg />}
                        </Button>
                    </ButtonWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Programmer} />
                    </ImgWrap>
                </Column2>
            </HomeRow>
            <SocialMediaWrapper>
                <SocialMediaLink href={github.url} target="_blank" >{github.name}</SocialMediaLink>
                <Separator>/</Separator>
                <SocialMediaLink href={linkedin.url} target="_blank" >{linkedin.name}</SocialMediaLink>
            </SocialMediaWrapper>
        </HeroContainer>
    );

export default HomeHero;