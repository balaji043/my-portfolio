import React, { FC } from 'react'
import { SideBarContainer, Icon, SideBarLink, SideBarMenu, SideBarWrapper, CloseIcon } from './SideBarElements'

type SideBarProps = {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
}

const SideBar: FC<SideBarProps> = ({ isSideBarOpen, toggleSideBar }) => {
    return (
        <SideBarContainer isOpen={isSideBarOpen} onClick={toggleSideBar}>
            <Icon onClick={toggleSideBar}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="home" onClick={toggleSideBar}>
                        home
                   </SideBarLink>
                    <SideBarLink to="works" onClick={toggleSideBar}>
                        works
                   </SideBarLink>
                    <SideBarLink to="portfolio" onClick={toggleSideBar}>
                        portfolio
                   </SideBarLink>
                    <SideBarLink to="tools" onClick={toggleSideBar}>
                        tools
                   </SideBarLink>
                    <SideBarLink to="contact" onClick={toggleSideBar}>
                        contact
                   </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;