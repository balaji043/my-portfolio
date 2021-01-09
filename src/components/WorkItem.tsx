import styled from "styled-components";
import { color } from "styles";
import AppButton from 'components/AppButton';
import { FC } from "react";
import AppStripe from "assets/svgs/AppStripe";

interface Props {

}

const workDetails = {
    slNo: `01`,
    heading: `Movx`,
    subtitle: `Built with something`,
    image: ``
}
const WorksItem: FC<Props> = (props) =>
    <WorksContainer>
        <Coloumn1>
            <StripeWrapper lightBg />
            <SlNo>
                {workDetails.slNo}
            </SlNo>
            <TextWrapper>
                <Heading>{workDetails.heading}</Heading>
                <Subtitle>{workDetails.subtitle}</Subtitle>
            </TextWrapper>
        </Coloumn1>
        <Column2>
            <AppButton href="/works" text="View Project" lightBg />
            <WorkImage />
        </Column2>
    </WorksContainer>

export default WorksItem;

const WorksContainer = styled.div`
background-color: ${color.secondary};
min-height: 300px;
display: grid;
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 2rem 5rem;
justify-content: flex-start;
color: #656565;
transition: padding 0.5s ease-in-out;

&:hover{
    color: ${color.blackFooter};
    padding: 3rem 6rem;
}
`

const Coloumn1 = styled.div`
display: flex;
align-items: flex-start;
position: relative;
`

const StripeWrapper = styled(AppStripe)`
position: absolute;
left: -220%;
top: 7%;
&:hover {
    fill: ${color.blackFooter};
}
`

const SlNo = styled.div`
`
const TextWrapper = styled.div`
margin-left: 20px;
`

const Heading = styled.h1`
margin-bottom: 20px;
`

const Subtitle = styled.p``

const Column2 = styled.div``

const WorkImage = styled.img``
