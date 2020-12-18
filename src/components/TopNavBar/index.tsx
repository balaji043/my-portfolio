import React, { FC, useEffect } from 'react';
import clsx from 'clsx';
import "./TopNavBar.scss"
import TopNavLogo from './TopNavLogo';
import { ReactNode } from 'react';
import TopNavButton from './TopNavButton';
import useBooleanState from 'hooks/useBooleanState';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Icon, { IconType } from 'components/Icon';
import { PageItem, pages } from 'utils';

interface ComponentProps {
    className?: string;
}

const TopNavBar: FC<ComponentProps> = ({ className }: ComponentProps) => {

    const [mobileMenuOpen, toggleMobileMenu, , closeMobileMenu] = useBooleanState(false);
    const { pathname } = useLocation();
    const { width } = useWindowDimensions();

    useEffect(() => {
        closeMobileMenu();
    }, [closeMobileMenu, pathname]);

    useEffect(() => {
        if (width > 992 && mobileMenuOpen) {
            closeMobileMenu();
        }
    }, [closeMobileMenu, mobileMenuOpen, width]);

    const renderMenuItems = (key: string, className?: string): ReactNode => (
        <>
            {
                pages.map(
                    (titleItem: PageItem) => {
                        console.log(className);

                        return <TopNavButton
                            key={titleItem.title + key}
                            title={titleItem.title}
                            className={className}
                            to={titleItem.to}
                        />
                    }
                )
            }
        </>
    );

    const renderMobileMenuItems = (): ReactNode => {
        if (!mobileMenuOpen) return null;
        return (
            <>
                <div className="mobile-menu__dropdown-container">
                    {renderMenuItems('mobile', 'mobile-menu__items')}
                </div>
                <div className={clsx('mobile-menu__overlay')} onClick={closeMobileMenu} role="button" tabIndex={0} />
            </>
        );
    };

    const renderMobileMenu = (): ReactNode => {
        return (
            <div className="mobile-menu">
                <button className="mobile-menu__button" onClick={toggleMobileMenu}>
                    <Icon icon={IconType.menu} size={24} />
                </button>
                {renderMobileMenuItems()}
            </div>
        );
    };

    const renderRightItems = (): ReactNode => {
        return (
            <div className="TopNav__right">
                {renderMenuItems('desktop', "TopNav__right-item")}
                {renderMobileMenu()}
            </div>
        );
    };


    return (
        <header className={clsx('TopNav', className)}>
            <div className="TopNav_Left">
                <TopNavLogo />
            </div>
            <div>
                {renderRightItems()}
            </div>
        </header>
    );
}

export default TopNavBar;