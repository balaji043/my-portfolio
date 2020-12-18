import React, { FC } from 'react';
import clsx from 'clsx';
import "./Contact.scss"
import { PageTitle } from 'components';

interface ComponentProps {
    className?: string;
}

const Contact: FC<ComponentProps> = ({ className }: ComponentProps) => {
    return (
        <div className={clsx('Contact', className)}>
            <PageTitle />
            Contact
        </div>
    );
}

export default Contact;