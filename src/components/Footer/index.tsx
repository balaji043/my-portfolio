import { Circle, BrArrowRight } from "components/Icons";
import { LinkRouter } from "components/Router";
import styled from "styled-components";
import { color } from "styles";
import { contactsPageItem } from "utils/pages";

const footerTexts = {
    heading: `Let's work together`,
    subtitle: `I'm always up for collaboration`,
    websiteName: `BALAJI RAMASAMY 2020`
}

const Footer = () => {
    return (
        <FooterContainer>
            <TextWrapper>
                <Heading>{footerTexts.heading}</Heading>
                <Subtitle>{footerTexts.subtitle}</Subtitle>
            </TextWrapper>
            <ButtonWrapper>
                <ButtonWrapper>
                    <Button to={contactsPageItem.to} >
                        {contactsPageItem.btnText}
                        {<ButtonIcon />}
                        {<ButtonBackground />}
                    </Button>
                </ButtonWrapper>
            </ButtonWrapper>
            <BottomSection>
                <WebSiteName>{footerTexts.websiteName}</WebSiteName>
                <SocialMediaWrapper>
                    <SocialMediaIcon>
                    </SocialMediaIcon>
                </SocialMediaWrapper>
            </BottomSection>
        </FooterContainer>
    )
}

export default Footer;


const FooterContainer = styled.div`
padding: 5rem;
color: ${color.white};
background-color: ${color.blackFooter};
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
`

const TextWrapper = styled.div`
padding: 0;
`

const Heading = styled.h1`
padding: 0;
`

const Subtitle = styled.p`
padding: 20px 0px;
font-size: small;
`

const ButtonBackground = styled(Circle)`
position: relative;
z-index: -1;
left: -8rem;
width: 3rem;
height: 3rem;
pointer-events: none;
`

const ButtonIcon = styled(BrArrowRight)`
margin-left: 1rem;
`

const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-start;
position: relative;
bottom: 0px;
left: -1rem;
`

export const Button = styled(LinkRouter)`
z-index: 1;
display: flex;
justify-content: start;
align-items: center;
`

const BottomSection = styled.div``
const WebSiteName = styled.p``

const SocialMediaWrapper = styled.div``
const SocialMediaIcon = styled.div``