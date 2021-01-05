import styled from 'styled-components';
import { LinkRouter, LinkScroll } from 'components/Router';
import { color } from 'styles';
import AppLogo from 'assets/svgs/Logo';

const screenMaxWidth = `960px`;
const navHeight = 60;

export const Nav = styled.nav`
background: ${color.secondary};
height: ${navHeight}px;
/* margin-top: ${-navHeight}px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0px;
z-index: 10;
@media screen and (max-width: ${screenMaxWidth} ){
    transition: 0.8s all ease; 
}
`
export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: ${navHeight};
z-index: 1;
width: 100%;
padding: 0 2rem;
`
export const NavLogo = styled(LinkRouter)`
color: ${color.black};
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
`

export const NavIcon = styled(AppLogo)`
margin-right: 0.5rem;
width: 36px;
height: 36px;
`

export const MobileMenuIcon = styled.div`
display: none;
@media screen and (max-width: ${screenMaxWidth}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${color.black}
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width: ${screenMaxWidth}){
    display: none;
}
`


export const NavItem = styled.li`
height: ${navHeight};
`

export const NavLink = styled(LinkScroll)`
color: ${color.black};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: smaller;
font-weight: bold;

&.active {
 border-bottom: 3px solid ${color.black};   
}
`