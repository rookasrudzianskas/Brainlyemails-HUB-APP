import React from 'react';
import {handleNewFormCreationModal} from "../../../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {useRecoilState} from "recoil";

const NewForm = () => {

    const [handleNewFormCreationModalState, setHandleNewFormCreationModalState] = useRecoilState(handleNewFormCreationModal);

    return (
        <div className="flex flex-row mt-10 items-center ">
            <div className="flex flex-1">
                <p className="text-xl text-gray-800">Forms</p>
            </div>
            <div
                onClick={() =>
                    setHandleNewFormCreationModalState(!handleNewFormCreationModalState)
                }
                className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                <p className="text-gray-100">+ New form</p>
            </div>
        </div>
    );
};

export default NewForm;
