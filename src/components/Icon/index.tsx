/* eslint-disable react/jsx-props-no-spreading */

import React, { forwardRef, ReactNode, useMemo } from 'react';
import clsx from 'clsx';

import MenuIcon from 'mdi-react/MenuIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';

import './Icon.scss';
import { getCustomClassNames } from 'utils/components';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  menu,
  github,
  linkedin,
  facebook
}

interface ComponentProps {
  className?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onKeyDown?(e?: React.KeyboardEvent<HTMLDivElement>): void;
  size?: number;
  totalSize?: number | 'unset';
  unfocusable?: boolean;
}

const Icon = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, disabled = false, icon, onClick, onKeyDown, size, totalSize = 'unset', unfocusable = false }, ref) => {
    const iconProps = {
      size,
    };

    const renderIcon = (): ReactNode => {
      switch (icon) {
        case IconType.menu:
          return <MenuIcon {...iconProps} />;
        case IconType.github:
          return <GithubIcon {...iconProps} />;
        case IconType.linkedin:
          return <LinkedinIcon {...iconProps} />;
        case IconType.facebook:
          return <FacebookIcon {...iconProps} />;
        default:
          return null;
      }
    };

    const divStyle = useMemo(() => {
      if (totalSize === 'unset') return {};
      const divSize = Math.max(size || 0, totalSize);
      return { height: divSize, width: divSize };
    }, [size, totalSize]);

    const tabIndex = useMemo(() => (unfocusable || !onClick ? undefined : 0), [onClick, unfocusable]);

    const handleClick = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (disabled || !onClick) return;
      onClick(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (!onClick) return;

      if (e.key === 'Enter' && !disabled) {
        handleClick();
      }

      onKeyDown?.(e);
    };

    return (
      <div
        role="button"
        className={clsx('Icon', className, {
          'Icon--disabled': disabled,
          ...getCustomClassNames(className, '--disabled', disabled),
        })}
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={divStyle}
        tabIndex={tabIndex}
      >
        {renderIcon()}
      </div>
    );
  },
);

export default Icon;
