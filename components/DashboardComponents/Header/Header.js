import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-row items-center px-5">
            <div className="flex flex-1">
                <img src="https://www.brainlyemails.com/images/img_14.png"  className="object-contain h-36 w-56" alt=""/>
            </div>
            <div className="flex mx-3">
                <span className="text-gray-300 font-bold text-lg flex hover:text-white cursor-pointer transition duration-150 ease-in-out">Feedback? </span>
            </div>
            <div className="flex">
                <span className="text-gray-300 font-bold text-lg flex hover:text-white cursor-pointer transition duration-150 ease-in-out">Rookas</span>
            </div>
        </div>
    );
};

export default Header;
