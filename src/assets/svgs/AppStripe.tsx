import { MyIconProps } from 'components/Icons/Icon'
import Svg from 'components/Icons/Svg'
import React, { FC } from 'react'
import { color } from 'styles';


const AppStripe: FC<MyIconProps> = ({ className, lightBg = false }) => {
    return (
        <Svg className={className} width="400" height="4" viewBox="0 0 400 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="4" fill={lightBg ? color.lightCircle : color.darkCircle} />
        </Svg>
    )
}

export default AppStripe;
