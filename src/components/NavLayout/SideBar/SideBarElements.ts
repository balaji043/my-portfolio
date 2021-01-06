import { AppLogo, BrCloseIcon } from 'components/Icons';
import { LinkRouter } from 'components/Router';
import styled from 'styled-components'

import { color } from 'styles';

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
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
top: 0;
left: 0;
transition: 0.4s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
top: ${({ isOpen }) => (isOpen ? '0%' : '-200%')};
`
export const SideBarTop = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 2rem;
width: 100%;
height: 60px;
align-items: center;
`

export const NavIcon = styled(AppLogo)`
width: 36px;
height: 36px;
fill: ${color.white};
`

export const CloseIcon = styled(BrCloseIcon)`
color: ${color.white};
`

export const Icon = styled.div`
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SideBarWrapper = styled.div`
color: ${color.white};
width: 100%;
margin-top: 42px;
`
export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
@media screen and (max-width: ${mobileScreenWidth}px){
    grid-template-rows: repeat(6, 60px);
}
`
export const SideBarLink = styled(LinkRouter)`
display: flex;
align-items:center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: ${color.secondary};
cursor: pointer;
`