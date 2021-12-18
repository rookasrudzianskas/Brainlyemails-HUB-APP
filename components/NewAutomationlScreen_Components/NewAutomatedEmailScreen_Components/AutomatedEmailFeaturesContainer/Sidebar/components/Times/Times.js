import React from 'react';

const Times = ({time}) => {
    return (
        <div className="flex flex-row items-center space-y-[4px] hover:bg-indigo-200 py-1 px-2 rounded-sm transition duration-150 ease-in-out cursor-pointer">
            <div className="flex flex-row flex-1">
                <p className=" text-sm text-gray-800">{time.day} at</p>
                <p className="ml-[4px] text-sm text-gray-800"> {time.time}</p>
            </div>
            <div className="flex flex-row">
                <p className=" text-sm text-gray-800  font-semibold">{time.date}</p>
                <p  className="ml-[4px] text-sm text-gray-800 font-semibold">{time.time}</p>
            </div>
        </div>
    );
};

export default Times;
