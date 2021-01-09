import Button from 'components/AppButton';
import styled from "styled-components";
import { color, screenMaxWidth } from "styles";
import { contactsPageItem } from "utils/pages";
import { socialMedias } from 'utils/social-media';

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
            <Button href={contactsPageItem.to} text={contactsPageItem.btnText} />
            <BottomSection>
                <SocialMediaWrapper>
                    {socialMedias.map(e =>
                        <SocialMediaIcon key={e.name} href={e.url} target="_blank" >
                            <e.icon />
                        </SocialMediaIcon>)}
                </SocialMediaWrapper>
                <WebSiteName>{footerTexts.websiteName}</WebSiteName>
            </BottomSection>
        </FooterContainer>
    )
}

export default Footer;


const FooterContainer = styled.div`
padding: 1rem 3rem;
color: ${color.white};
background-color: ${color.blackFooter};
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
min-height: 400px;
@media screen and (max-width: ${screenMaxWidth}) {
padding: 1rem 2rem;
text-align: start;
}
`

const TextWrapper = styled.div`
padding: 0.5rem 0;
`

const Heading = styled.h1`
padding: 0;
font-size: xxx-large;
@media screen and (max-width: ${screenMaxWidth}){
font-size: xx-large;
}
`
const Subtitle = styled.p`
padding: 0.5rem 0;
margin: 0;
font-size: small;
`

const BottomSection = styled.div`
 width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`
const WebSiteName = styled.p`
font-size: x-small;
margin: 0px;
`

const SocialMediaWrapper = styled.div`
margin-bottom: 1rem;
`
const SocialMediaIcon = styled.a`
margin: 1rem;
`