import { FC } from 'react';
import styled from "styled-components";
import { screenMaxWidth } from "styles";

const aboutTexts = {
    intro: 'I am a passsionate \nfront-end developer \nand UI/UX desginer with a keen \neye for details.',
    description: `I develop full stack web and mobile applications. I am passionate about developing applications. I like to develop to application that deals with real world problems and makes the client's work way more easier. This site is to tell a bit about myself to the world. I have plans to write on blog posts to document the challenges I face and find intresting in my dev-life.`,
    imageURL: `https://avatars2.githubusercontent.com/u/28929177?s=460&u=60fa71c322ea6e29fa1e7f91b39100ac8a0e412c&v=4`,
    howIWork: {
        description: `I use a number of tools that make design and development easier.`,
        tools: [
            `Figma`,
        ],
        programmingLanguage: [
            `HTML 5`,
            `CSS 3`,
            `JavaScript`,
            `TypeScript`,
            `React JS`,
            `Node JS`,
            `Express JS`,
            `Flutter`,
            `Redux`,
            `Firebase`,
            `GraphQL`,
            `Git`,
            `NPM`,
            `Java`,
            `Spring Boot`,
            `Maven`,
            `Gradle`
        ]
    }
}

const About: FC = () => {
    return (
        <AboutContainer>
            <IntroSection>
                <IntroHeading>
                    {aboutTexts.intro}
                </IntroHeading>
            </IntroSection>
            <DescriptionSection>
                <ColumnWrapper>
                    <Column1>
                        <ImageWrapper src={aboutTexts.imageURL} />
                    </Column1>
                    <Column2>
                        <DetailText>
                            {aboutTexts.description}
                        </DetailText>
                    </Column2>
                </ColumnWrapper>
            </DescriptionSection>

            <ServicesSection>
            </ServicesSection>

            <WorkSection>

                <ColumnWrapper>

                    <Column1>
                        <Heading> How I Work</Heading>
                    </Column1>

                    <Column2>
                        <WorkDescription>
                            {aboutTexts.howIWork.description}
                        </WorkDescription>
                    </Column2>

                </ColumnWrapper>

                <ColumnWrapper>

                    <Column1>
                        <Heading> Web Development</Heading>
                    </Column1>

                    <Column2>
                        {
                            aboutTexts.howIWork.programmingLanguage.map(
                                e => (
                                    <WebTechonologies key={e}>
                                        {e}
                                    </WebTechonologies>
                                )
                            )
                        }
                    </Column2>

                </ColumnWrapper>

            </WorkSection>
            
            <SkillSection>
            </SkillSection>
 
        </AboutContainer>
    );
}

export default About;

export const AboutContainer = styled.div``

export const IntroSection = styled.div`
min-height: 400px;
justify-content: center;
display: flex;
align-items: center;
@media screen and (max-width: ${screenMaxWidth}){
    padding: 1rem;
}
`
export const IntroHeading = styled.h1`
line-height: 1.5;
white-space: pre-wrap;
`

export const DescriptionSection = styled.div`
`
export const ServicesSection = styled.div``
export const WorkSection = styled.div``
export const SkillSection = styled.div``
export const ImageWrapper = styled.img`
width: 200px;
`

export const ColumnWrapper = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
grid-template-areas: 'col1 col2';
align-items: center;
min-height: 500px;
@media screen and (max-width: ${screenMaxWidth}){
    grid-template-areas:  'col1 col1'
        'col2 col2';
}
`
export const Column1 = styled.div`
place-self: center;
align-self: flex-start;
grid-area: col1;
`
export const Column2 = styled.div`
grid-area: col2;
`

export const DetailText = styled.p`
line-height: 2.4;
padding: 1rem;
text-align: justify;
`

export const WorkDescription = styled.div``
export const Heading = styled.h1``

export const WebTechonologiesWrapper = styled.div`
display: grid;
`
export const WebTechonologies = styled.p``