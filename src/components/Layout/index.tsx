import React, { FC, useEffect } from 'react';
import clsx from 'clsx';
import "./Layout.scss"
import { useLocation } from 'react-router-dom';
import TopNavBar from 'components/TopNavBar';

interface ComponentProps {
    className?: string;
}

const Layout: FC<ComponentProps> = ({children}) => {
    const { pathname } = useLocation();
    const isHomepage = pathname === '/';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="Layout">
            <div className="Layout__top-nav-wrapper">
                <TopNavBar className="Layout__TopNav" />
            </div>
            <div className={clsx({ Layout__content: !isHomepage, Layout__home: isHomepage })}>{children}</div>
            {/* <div className="Layout__footer-wrapper">
            </div> */}
        </div>
    );
}

export default Layout;