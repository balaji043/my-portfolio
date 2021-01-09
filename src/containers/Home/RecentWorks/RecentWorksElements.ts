import styled from "styled-components";
import { color, screenMaxWidth } from "styles";


export const RecentWorksContainer = styled.div``
export const IntroSection = styled.div`
background-color: ${color.white};
display: grid;
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 2rem 5rem;
justify-content: flex-start;
@media screen and (max-width: ${screenMaxWidth}) {
    padding: 2rem 2rem;
}
`
export const Heading = styled.div``
export const Subtitle = styled.div``
export const WorksWrapper = styled.div``