import React, { FC } from 'react';
import clsx from 'clsx';
import "./Works.scss"
import { PageTitle } from 'components';

interface ComponentProps { 
    className?: string; 
}

const Works: FC<ComponentProps> = ({ className }: ComponentProps) => { 
    return (
        <div className={clsx('Works', className)}>
            <PageTitle />
            Works
        </div>
    ); 
} 

export default Works;