import React from 'react';
import useColor from '../../hooks/useColor';


export default function Badges({children, color, variant}){

const getColorClass = useColor(color);

const squareBadges = "px-3 py-1 text-sm font-medium"
const roundedBadges = "rounded-full px-3 py-1 text-sm font-medium"

const variantClass = variant === "square" ? squareBadges : roundedBadges;
    
 return(
    <span className={`${getColorClass} ${variantClass}`}>{children}</span>
)

}