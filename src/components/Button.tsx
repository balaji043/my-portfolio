import React, { FC } from "react";
import styled from "styled-components";
import { AppArrowRight, AppCircle } from "./Icons";
import { LinkRouter } from "./Router";

type ButtonProps = {
    text: string;
    href: string;
    lightBg?: boolean;
}

const AppButton: FC<ButtonProps> = ({ text, href, lightBg = false }) =>
    <ButtonWrapper>
        <ButtonLink to={href} >
            {text}
            <ButtonIcon />
        </ButtonLink>
        <ButtonBackground lightBg={lightBg} />
    </ButtonWrapper>
    ;

export default AppButton;

const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-start;
position: relative;
height: 3rem;
`;

const ButtonLink = styled(LinkRouter)`
color: inherit;
z-index: 2;
display: flex;
justify-content: start;
align-items: center;
`;

export const ButtonIcon = styled(AppArrowRight)`
    margin-left: 1rem;
`

type ButtonBackgroundProps = {
    lightBg?: boolean;
}

export const ButtonBackground = styled(AppCircle) <ButtonBackgroundProps>`
position: absolute;
left: -1.2rem;
z-index: 1;
width: 3rem;
height: 3rem;
pointer-events: none;
`