import React, { FC } from 'react';
import clsx from 'clsx';
import "./Tools.scss"
import { PageTitle } from 'components';

interface ComponentProps { 
    className?: string; 
}

const Tools: FC<ComponentProps> = ({ className }: ComponentProps) => { 
    return (
        <div className={clsx('Tools', className)}>
            <PageTitle />
            Tools
        </div>
    ); 
} 

export default Tools;