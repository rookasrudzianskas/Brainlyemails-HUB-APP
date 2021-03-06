import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = () => {
    return (
        <div className="flex flex-row items-center px-5 ">
            <div className="flex flex-1">
                <img src="https://www.brainlyemails.com/images/img_14.png"  className="object-contain h-32 w-44" alt=""/>
            </div>
            <div className="flex mx-3">
                <span className="text-gray-300 font-bold text-[15px] flex hover:text-white cursor-pointer transition duration-150 ease-in-out">Feedback? </span>
            </div>
            <div className="flex flex-row">
                <span className="text-gray-300 font-bold text-[15px] flex hover:text-white cursor-pointer transition duration-150 ease-in-out">Rookas</span>
                <ChevronRightIcon className={"text-gray-300 rotate-90 text-xs"} />
            </div>
        </div>
    );
};

export default Header;
