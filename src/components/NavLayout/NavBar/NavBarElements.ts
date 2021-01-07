import styled from 'styled-components';
import { LinkRouter } from 'components/Router';
import { color } from 'styles';
import AppLogo from 'assets/svgs/AppLogo';
import { AppCircle } from 'components/Icons';

const screenMaxWidth = `960px`;
const navHeight = `90px`;
const largeIconSize = `54px`;
const smallIconSize = `36px`;

export const Nav = styled.nav`
background: ${color.secondary};
height: ${navHeight};
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0px;
z-index: 999;
color: ${color.black};
`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: ${navHeight};
z-index: 1;
width: 100%;
align-items: flex-start;
padding-left: 4rem;
padding-right: 6rem;
padding-top: 2rem;
padding-bottom: 2rem;
@media screen and (max-width: ${screenMaxWidth}) {
align-items: flex-start;
padding-right: 1rem;
padding-top: 0.5rem;
padding-left: 1rem;
}
`


export const NavLogo = styled(LinkRouter)`
cursor: pointer;
align-items: center;
`

export const NavIcon = styled(AppLogo)`
width: ${largeIconSize};
height: ${largeIconSize};
@media screen and (max-width: ${screenMaxWidth}) {
width: ${smallIconSize};
height: ${smallIconSize};
}
`

export const MobileMenuIcon = styled.div`
display: none;
@media screen and (max-width: ${screenMaxWidth}) {
display: block;
font-size: 1.8rem;
cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
@media screen and (max-width: ${screenMaxWidth}){
display: none;
}
`

export const NavItem = styled.li`
height: 45px;
`

export const NavLink = styled(LinkRouter)`
color: ${color.black};
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
font-weight: 600;cursor: pointer;
font-size: 14px;
padding-right: .6rem;
padding-left: .6rem;
position: relative;
`


export const NavLinkActiveIndicator = styled(AppCircle)`
fill: ${color.black};
position: absolute;
bottom: 10%;
left: 46%;
width: 0.3rem;
height: 0.3rem;
display: ${(active) => active ? `block` : 'none'}
`