import styled from "styled-components";
import { color, screenMaxWidth } from "styles";


export const RecentWorksContainer = styled.div`

`
export const IntroSection = styled.div`
background-color: ${color.white};
display: flex;
flex-direction: column;
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 2rem 5rem;
height: 400px;
justify-content: center;
color: ${color.black};
@media screen and (max-width: ${screenMaxWidth}) {
    padding: 2rem 2rem;
}
`
export const Heading = styled.h1`
font-size: 48px;
line-height: 48px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: lowercase;
margin-bottom: 24px;
color: inherit;
background-color: inherit;

@media screen and (max-width: 480px){
font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
background-color: inherit;
color: inherit;
`

export const WorksWrapper = styled.div``