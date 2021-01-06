import { MyIconProps } from 'components/Icons/Icon';
import { FC } from 'react';
import Svg from 'components/Icons/Svg'




const AppLogo: FC<MyIconProps> = ({ className }) => {
    return (
        <Svg className={className} width='16px' height='16px' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Vector 2">
                <path d="M8.37732 4.21427C8.37732 4.21427 1.14662 8.81978 7.16569 16L7.32203 14.8758L9.78438 14.7308C2.74777 11.6846 8.37732 4.21427 8.37732 4.21427Z" />
                <path d="M14.0837 12.2286C14.3123 9.39163 13.0284 8.56593 9.78438 8.0945C11.5041 7.26044 12.2858 5.22967 12.0904 4.21427C11.2305 -1.44286 -1.12814 2.74114 3.13995 13.3527C-3.97349 7.18791 2.40718 -0.273096 8.37732 0.00769279C13.9759 0.271009 18.813 6.57143 14.0837 12.2286Z" />
            </g>
        </Svg>
    )
}

export default AppLogo;