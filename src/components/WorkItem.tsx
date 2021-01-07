import styled from "styled-components";
import { color, screenMaxWidth } from "styles";
import AppButton from 'components/Button';
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
color: ${color.darkCircle};
&:hover{
    color: ${color.blackFooter};
}
`

const Coloumn1 = styled.div`
display: flex;
align-items: center;
position: relative;
`

const StripeWrapper = styled(AppStripe)`
position: absolute;
left: -25%;
rect: {
    width: 64px;
}
`

const SlNo = styled.div`
`
const TextWrapper = styled.div``

const Heading = styled.h1``

const Subtitle = styled.p``

const Column2 = styled.div``

const WorkImage = styled.img``
