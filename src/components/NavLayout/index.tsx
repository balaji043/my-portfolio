import NavBar from 'components/NavLayout/NavBar'
import SideBar from 'components/NavLayout/SideBar'
import useBooleanState from 'hooks/useBooleanState'
import React from 'react'

const NavLayout = () => {
    const [isSideBarOpen, toggleSideBar] = useBooleanState(false);

    return (
        <>
            <NavBar toggleSideBar={toggleSideBar} />
            <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        </>
    )
}

export default NavLayout;