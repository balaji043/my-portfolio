import React, { FC } from 'react';
import clsx from 'clsx';
import "./Portfolio.scss"
import { PageTitle } from 'components';

interface ComponentProps { 
    className?: string; 
}

const Portfolio: FC<ComponentProps> = ({ className }: ComponentProps) => { 
    return (
        <div className={clsx('Portfolio', className)}>
            <PageTitle />
            Portfolio
        </div>
    ); 
} 

export default Portfolio;