import React from 'react';
import Center from "../Center";
import Sidebar from "../Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useRecoilState} from "recoil";
import {newAutomationName} from "../../../../contentManagement/atoms/NewAutomations/NewAutomations";

const TopPart = () => {
    const [newAutomationNameState, setNewAutomationNameState] = useRecoilState(newAutomationName);

    return (
        <div className="">
            <div className=" bg-gray-100 h-[55rem]">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col mt-10 w-full">
                            <div className="flex flex-row items-center space-x-5 ">
                                <div className="flex flex-row space-x-2 px-2 py-1 rounded-sm hover:cursor-pointer hover:text-indigo-500 hover:bg-indigo-200 transition duration-150 ease-in-out">
                                    <ArrowBackIcon className="text-indigo-500 " />
                                    <p className="text-indigo-500">Go back</p>
                                </div>
                                <FiberManualRecordIcon className="text-xs text-indigo-500" style={{fontSize: 5}} />
                                <p className="text-gray-500">draft saved</p>
                            </div>
                            <div className="flex flex-row items-center w-full mt-5">
                                <div className="flex flex-1">
                                    <h1 className="text-xl text-gray-800">{newAutomationNameState || 'Just something magical'}</h1>
                                </div>
                                <div
                                     className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                                    <p className="text-gray-100">Activate automation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex space-x-5 mt-2">
                        <Center />
                        {/*<Sidebar />*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPart;

