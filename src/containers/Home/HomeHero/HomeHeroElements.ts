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
    padding: 0 1rem;
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
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
background-color: inherit;
color: inherit;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0px;
padding-bottom: 60px;
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
`

export const Button = styled(LinkRouter)`
background-color: inherit;
color: inherit;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
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
