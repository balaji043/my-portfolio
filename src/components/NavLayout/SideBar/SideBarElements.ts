import { CloseSideBarIcon } from 'components/Icons';
import { LinkScroll } from 'components/Router';
import styled from 'styled-components'

import {color} from 'styles';

const mobileScreenWidth = 480;

type SideBarContainerProps = {
    isOpen: boolean;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: ${color.black};
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(CloseSideBarIcon)`
color: ${color.white};
`

export const Icon = styled.div`
position: absolute;  
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SideBarWrapper = styled.div`
color: ${color.white};
`
export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
@media screen and (max-width: ${mobileScreenWidth}px){
    grid-template-rows: repeat()(6, 60px);
}
`
export const SideBarLink = styled(LinkScroll)`
display: flex;
align-items:center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: ${color.secondary};
cursor: pointer;
&:hover{
    color: ${color.white};
    transition: 0.2s ease-in-out;
}
`