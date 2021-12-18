import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {addNewAutomationTriggers} from "../../../../../../contentManagement/atoms/AddNewAutomationTriggers/AddNewAutomationTriggers";

const FiltersMatch = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [addNewAutomationTriggersState, setAddNewAutomationTriggersState] = useRecoilState(addNewAutomationTriggers);

    return (
        <div className="flex flex-row items-center space-x-3 mt-5">
            <p className="text-gray-800 hover:cursor-pointer">Filters match:</p>
            <div onClick={() => setShow(!show)} className="flex space-x-2 flex-row items-center  hover:text-gray-700 cursor-pointer transition duration-150 ease-in-out">
                <div className={`w-5 h-5 ${show ? 'bg-indigo-500' : 'bg-gray-100'} rounded-full border-[1px] ${show ? 'border-indigo-300' : 'border-gray-300'} flex items-center justify-center`}>
                    {show && (
                        <div className="w-[8px] h-[8px] bg-gray-100 rounded-full"/>
                    )}
                </div>
                <p>All conditions</p>
            </div>

            <div onClick={() => setShow2(!show2)} className="flex space-x-2 flex-row items-center hover:text-gray-700 cursor-pointer transition duration-150 ease-in-out">
                <div  className={`w-5 h-5 ${show2 ? 'bg-indigo-500' : 'bg-gray-100'} rounded-full border-[1px] ${show2 ? 'border-indigo-300' : 'border-gray-300'} flex items-center justify-center`}>
                    {show2 && (
                        <div className="w-[8px] h-[8px] bg-gray-100 rounded-full"/>
                    )}
                </div>
                <p>Any condition</p>
            </div>
        </div>
    );
};

export default FiltersMatch;
