import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type ComponentProps = {
  title: string;
}
const PageTitle: FC<ComponentProps> = ({ title }) => {

  return (
    <Helmet>
      <title>{title} | balaji</title>
    </Helmet>
  );
};

export default PageTitle;
