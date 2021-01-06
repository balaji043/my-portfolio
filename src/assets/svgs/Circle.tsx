import { MyIconProps } from 'components/Icons/Icon';
import { FC } from 'react';
import Svg from 'components/Icons/Svg'
import { color } from 'styles';

const Circle: FC<MyIconProps> = ({ className, lightBg }) => {
    return (
        <Svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill={lightBg ? color.lightCircle : color.darkCircle} />
        </Svg>
    )
}

export default Circle;