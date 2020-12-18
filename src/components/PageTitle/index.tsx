import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPathTitle } from 'utils';

const PageTitle: FC = () => {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <title>{getPathTitle(pathname)} | balaji</title>
    </Helmet>
  );
};

export default PageTitle;
