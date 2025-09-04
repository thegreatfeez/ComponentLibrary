import React from "react";
import useColor from '../../hooks/useColor';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GrAlert } from "react-icons/gr";
import { HiOutlineInformationCircle } from "react-icons/hi2";

function Banner({ children, status, title }) {
   const statusConfig = {
    success: {
        icon: <FaRegCheckCircle className="w-5 h-5 mr-2"/>,
        color: "green"
    },

    error:{
        icon: <MdCancel className="w-5 h-5 mr-2"/>,
        color: "red"
    },

    warning:{
        icon: <GrAlert className="w-5 h-5 mr-2"/>,
        color: "yellow"
    },

     neutral:{
        icon: <HiOutlineInformationCircle className="w-5 h-5 mr-2"/>,
        color: "gray"
    }
   }
    const currentStatus = statusConfig[status] || statusConfig.neutral;
   const colorClass = useColor(currentStatus.color);
   const icon = currentStatus.icon;

return(
    <div className={`flex items-start ${colorClass} p-4 mb-4 text-sm rounded-lg`} role="alert">
        {icon}
        <div>
            <div className="font-bold text-base mb-1">{title}</div>
            {children && <div className="text-sm">{children}</div>}
        </div>
    </div>
)
}

export default Banner;