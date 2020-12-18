
import React, { FC } from 'react';
import clsx from 'clsx';
import "./TopNavButton.scss"
import { Link } from 'react-router-dom';

interface ComponentProps {
    title: string;
    to: string;
    className?: string;
}

const TopNavButton: FC<ComponentProps> = ({ title, to, className }: ComponentProps) => {
    return (
        <Link to={to} className={clsx('TopNavButton', className)}>
            <span className="TopNavButton__title">{title}</span>
        </Link>
    );
}

export default TopNavButton;
