import React, {useState} from 'react';
import CodeIcon from '@mui/icons-material/Code';
import TriggerComponent from "../components/TriggerComponent";
import {useRecoilState} from "recoil";
import {addNewAutomationTriggers} from "../../../../contentManagement/atoms/AddNewAutomationTriggers/AddNewAutomationTriggers";


const Center = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [addNewAutomationTriggersState, setAddNewAutomationTriggersState] = useRecoilState(addNewAutomationTriggers);
    console.log(addNewAutomationTriggersState)

    return (
        <div className="flex w-full flex flex-col bg-white border border-1 border-indigo-500 rounded-sm px-10 py-12">
            <div className="max-w-5xl">
                <p className="text-xl text-gray-800">
                    Triggers
                </p>
                <p className="text-gray-500 mt-3">
                    Select conditions that will trigger this automation. Intentionally,
                    it's possible for the same contact to trigger this automation multiple
                    times if the contact's data change from condition matching state to
                    non-matching state back to matching state, and if the goal hasn't been reached or is not set.
                </p>
            </div>

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

            {Array(addNewAutomationTriggersState).fill().map((_, i) => (
                    <div className="mt-5">
                        <TriggerComponent />
                    </div>
                ))}

            <div className="mt-5 hover:text-indigo-400 cursor-pointer"
                onClick={() =>
                setAddNewAutomationTriggersState(addNewAutomationTriggersState + 1)
            }>
                <p className="text-indigo-500">+ Add condition</p>
            </div>


        </div>
    );
};

export default Center;
