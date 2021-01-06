import { BrArrowRight, Circle } from "components/Icons";
import { LinkRouter } from "components/Router";
import styled from "styled-components";
import { color, screenMaxWidth } from "styles";


type HeroContainerProps = {
    lightBg?: boolean;
}


export const HeroContainer = styled.div<HeroContainerProps>`
color: ${({ lightBg }) => (lightBg ? color.black : color.secondary)};
background: ${({ lightBg }) => (lightBg ? color.secondary : color.black)};

display: grid;
z-index: 1;
/* height: 860px; */
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 2rem 5rem;
justify-content: center;
@media screen and (max-width: ${screenMaxWidth}){
padding: 1rem 1rem;
}
`
type RowProps = {
    imageStart?: boolean;
}

export const HomeRow = styled.div<RowProps>`
display: grid;
color: inherit;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imageStart }) => (imageStart ? `'col2 col1'` : `'col1 col2'`)};
background-color: inherit;
@media screen and (max-width: 768px){
grid-template-areas: ${({ imageStart }) => (imageStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom: 1rem;
padding: 0 1rem;
grid-area: col1;
background-color: inherit;
color: inherit;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0px;
color: ${color.black};
background-color: inherit;
color: inherit;

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

export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-start;
background-color: inherit;
color: inherit;
position: relative;
bottom: 0px;
`

type ButtonBackgroundProps = {
    lightBg?: boolean;
}
export const ButtonBackground = styled(Circle)<ButtonBackgroundProps>`
position: relative;
z-index: -1;
left: -10rem;
width: 3rem;
height: 3rem;
pointer-events: none;
`

export const Button = styled(LinkRouter)`
background-color: transparent;
color: inherit;
z-index: 1;
display: flex;
justify-content: start;
align-items: center;
`

export const ButtonIcon = styled(BrArrowRight) `
    margin-left: 1rem;
`

export const Column2 = styled.div`
margin-bottom: 1rem;
padding: 0 1rem;
grid-area: col2;
background-color: inherit;
color: inherit;
`

export const ImgWrap = styled.div`
max-width: 695px;
height: 100%;
background-color: inherit;

`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
color: inherit;
`
export const SocialMediaWrapper = styled.div`
display: flex;
margin-left: 1rem;
`
export const SocialMediaLink = styled.a`
color: ${color.black};
text-decoration: underline;
font-size: small;
`
export const Separator = styled.p`
margin: 0px 0.5rem 0px 0.5rem;
font-size: smaller;
`