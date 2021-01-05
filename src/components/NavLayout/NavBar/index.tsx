import {MenuBarIcon } from 'components/Icons'
import React, { FC } from 'react'
import { homePageItem } from 'utils/pages'
import { MobileMenuIcon, Nav, NavBarContainer, NavIcon, NavItem, NavLink, NavLogo, NavMenu } from './NavBarElements'

type NavBarProps = {
    toggleSideBar: () => void;
}

const NavBar: FC<NavBarProps> = ({ toggleSideBar }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={homePageItem.to}>
                        <NavIcon />
                    </NavLogo>
                    <MobileMenuIcon onClick={toggleSideBar}>
                        <MenuBarIcon />
                    </MobileMenuIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='home'>HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='about'>ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='works'>WORKS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'>CONTACT</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar;