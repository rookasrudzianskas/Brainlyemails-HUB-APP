import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {manageInputThingsData} from "../../../../../../../../../contentManagement/atoms/ManageInputThingsData/ManageInputThingsData";

const StyleSection = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [manageInputThingsDataState, setManageInputThingsDataState] = useRecoilState(manageInputThingsData);

    return (
        <div className="flex">
            <div className="flex flex-col space-y-3 mt-5">
                <p className="text-md text-indigo-500 font-semibold mb-1 ">Style</p>
                <div onClick={() => setShow(!show)} className="flex space-x-2 flex-row items-center  hover:text-gray-700 cursor-pointer transition duration-150 ease-in-out">
                    <div className={`w-5 h-5 ${show ? 'bg-indigo-500' : 'bg-gray-100'} rounded-full border-[1px] ${show ? 'border-indigo-300' : 'border-gray-300'} flex items-center justify-center`}>
                        {show && (
                            <div className="w-[8px] h-[8px] bg-gray-100 rounded-full"/>
                        )}
                    </div>
                    <p>Title</p>
                </div>

                <div onClick={() => setShow2(!show2)} className="flex space-x-2 flex-row items-center hover:text-gray-700 cursor-pointer transition duration-150 ease-in-out">
                    <div  className={`w-5 h-5 ${show2 ? 'bg-indigo-500' : 'bg-gray-100'} rounded-full border-[1px] ${show2 ? 'border-indigo-300' : 'border-gray-300'} flex items-center justify-center`}>
                        {show2 && (
                            <div className="w-[8px] h-[8px] bg-gray-100 rounded-full"/>
                        )}
                    </div>
                    <p>Standard</p>
                </div>

                <div onClick={() => setShow3(!show3)} className="flex space-x-2 flex-row items-center hover:text-gray-700 cursor-pointer transition duration-150 ease-in-out">
                    <div  className={`w-5 h-5 ${show3 ? 'bg-indigo-500' : 'bg-gray-100'} rounded-full border-[1px] ${show3 ? 'border-indigo-300' : 'border-gray-300'} flex items-center justify-center`}>
                        {show3 && (
                            <div className="w-[8px] h-[8px] bg-gray-100 rounded-full"/>
                        )}
                    </div>
                    <p>Muted</p>
                </div>

            </div>
        </div>
    );
};

export default StyleSection;
