import React, { FC } from 'react'
import { pageItems } from 'utils/pages'
import { SideBarContainer, Icon, SideBarLink, SideBarMenu, SideBarWrapper, CloseIcon, SideBarTop, NavIcon } from './SideBarElements'

type SideBarProps = {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
}

const SideBar: FC<SideBarProps> = ({ isSideBarOpen, toggleSideBar }) => {
    return (
        <SideBarContainer isOpen={isSideBarOpen} onClick={toggleSideBar}>
            <SideBarTop>
                <NavIcon />
                <Icon onClick={toggleSideBar}>
                    <CloseIcon />
                </Icon>
            </SideBarTop>
            <SideBarWrapper>
                <SideBarMenu>
                    {
                        pageItems.map(
                            e =>
                                <SideBarLink key={e.to} to={e.to} onClick={toggleSideBar}>
                                    {e.title}
                                </SideBarLink>
                        )
                    }
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;