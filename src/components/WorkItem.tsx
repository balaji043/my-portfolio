import styled from "styled-components";
import { color, screenMaxWidth } from "styles";
import AppButton from 'components/AppButton';
import { FC } from "react";
import AppStripe from "assets/svgs/AppStripe";
import Work from 'assets/images/k-app.png';
interface Props {

}

const workDetails = {
    slNo: `01`,
    heading: `Movx`,
    subtitle: `Built with something`,
    image: Work
}
const WorksItem: FC<Props> = (props) =>
    <WorksContainer>
        <StripeWrapper lightBg />
        <SlNo>
                {workDetails.slNo}
            </SlNo>
          
            <TextWrapper>
                <Heading>{workDetails.heading}</Heading>
                <Subtitle>{workDetails.subtitle}</Subtitle>
            </TextWrapper>
        <AppButton href="/works" text="View Project" lightBg />
    </WorksContainer>

export default WorksItem;

const WorksContainer = styled.div`
color: ${color.black};
background-color: ${color.secondary};
min-height: 200px;
z-index: 1;
width: 100%;
padding: 2rem 10rem;
border-bottom: 2px solid ${color.lightCircle};
transition: padding 0.5s ease-in-out;
display: flex;
justify-content: flex-start;
align-items: flex-start;
position: relative;
&:hover {
    color: ${color.blackFooter};
    padding: 3rem 12rem;
    background-color: ${color.white};
    border-top: 1px solid ${color.black};
    border-bottom: 1px solid ${color.black};
    @media screen and (max-width: ${screenMaxWidth}) {
        padding: 2rem 2rem;
    }
}

@media screen and (max-width: ${screenMaxWidth}) {
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: flex-start;
}
`

const StripeWrapper = styled(AppStripe)`
position: absolute;
left: -22%;
top: 10%;
&:hover {
    fill: ${color.blackFooter};
}
`

const SlNo = styled.h4`
color: ${color.darkCircle};
margin: 1% 20px;
`
const TextWrapper = styled.div`
flex-grow: 1;
padding-top: 0px;
`

const Heading = styled.h1`
margin-bottom: 20px;
`

const Subtitle = styled.p``
