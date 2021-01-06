import { BrMenuBarIcon } from 'components/Icons'
import React, { FC } from 'react'
import { homePageItem, PageItem, pageItems } from 'utils/pages'
import { MobileMenuIcon, Nav, NavBarContainer, NavIcon, NavItem, NavLink, NavLogo, NavMenu } from './NavBarElements'

type NavBarProps = {
    toggleSideBar: () => void;
}

const NavBar: FC<NavBarProps> = ({ toggleSideBar }) => {

    const navItem = (pageItem: PageItem) =>
        <NavItem key={pageItem.to}>
            <NavLink to={pageItem.to}>{pageItem.title}</NavLink>
        </NavItem>;
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={homePageItem.to}>
                        <NavIcon />
                    </NavLogo>
                    <MobileMenuIcon onClick={toggleSideBar}>
                        <BrMenuBarIcon />
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