import React from 'react';
import Center from "../Center";
import Sidebar from "../Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const TopPart = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-[55rem]">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-row items-center space-x-5 ">
                                <div className="flex flex-row space-x-2 hover:cursor-pointer hover:text-indigo-500">
                                    <ArrowBackIcon className="text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" />
                                    <p className="text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out">Go back</p>
                                </div>
                                <FiberManualRecordIcon className="text-xs text-indigo-500" style={{fontSize: 5}} />
                                <p className="text-gray-500">draft saved</p>
                            </div>
                            <div className="flex flex-row flex-1 mt-5">
                                <h1 className="text-xl text-gray-800">New message</h1>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex space-x-5 mt-2">
                        <Center />
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPart;
