import { AppMenuBarIcon } from 'components/Icons'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { homePageItem, PageItem, pageItems } from 'utils/pages'
import { MobileMenuIcon, Nav, NavBarContainer, NavIcon, NavItem, NavLink, NavLinkActiveIndicator, NavLogo, NavMenu } from './NavBarElements'

type NavBarProps = {
    toggleSideBar: () => void;
}

const NavBar: FC<NavBarProps> = ({ toggleSideBar }) => {

    const { pathname } = useLocation();

    const navItem = (pageItem: PageItem) =>
        <NavItem key={pageItem.to}>
            <NavLink to={pageItem.to}>{pageItem.title}
                {pathname === pageItem.to ? <NavLinkActiveIndicator /> : null}
            </NavLink>
        </NavItem>;
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo aria-label="home" to={homePageItem.to}  >
                        <NavIcon />
                    </NavLogo>
                    <MobileMenuIcon onClick={toggleSideBar}>
                        <AppMenuBarIcon />
                    </MobileMenuIcon>
                    <NavMenu>
                        {pageItems.map(e => navItem(e))}
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar;