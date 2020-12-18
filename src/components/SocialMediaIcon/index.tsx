import React, { FC } from 'react';
import clsx from 'clsx';

import { A, Icon } from 'components';
import { SocialMedia } from 'types';

interface ComponentProps {
  className?: string;
  iconSize: number;
  socialMedia: SocialMedia;
}

const SocialMediaIcon: FC<ComponentProps> = ({ className, iconSize, socialMedia }) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMedia.url}>
      <Icon icon={socialMedia.icon} size={iconSize} />
    </A>
  );
};

export default SocialMediaIcon;
