import React, { FC } from 'react';
import "./Portfolio.scss"
import { PageTitle } from 'components';

const Portfolio: FC = () => {
    return (
        <div className='Portfolio'>
            <PageTitle title='PORTFOLIO'/>
            Portfolio
        </div>
    );
}

export default Portfolio;