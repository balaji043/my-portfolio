import styled from "styled-components";
import { color, screenMaxWidth } from "styles";


type HeroContainerProps = {
    lightBg: boolean;
}
export const HeroContainer = styled.div<HeroContainerProps>`
color: ${color.black};
background: ${({ lightBg }) => (lightBg ? color.white : color.secondary)};

@media screen and (max-width: ${screenMaxWidth}){
    padding: 100px 0px;
}
`

export const HeroWrapper = styled.div``
export const HomeRow = styled.div``
export const Column1 = styled.div``
export const TextWrapper = styled.div``
export const TopLine = styled.div``
export const Heading = styled.div``
export const Subtitle = styled.div``
export const Column2 = styled.div``
export const ImgWrap = styled.div``
export const Img = styled.div``