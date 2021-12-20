import React from 'react';
import {useRecoilState} from "recoil";
import {addNewFieldsToForm} from "../../../../../contentManagement/atoms/AddNewFieldsToForm/AddNewFieldsToForm";
import {ArrowDownward, ArrowUpward, Delete} from "@mui/icons-material";

const AddField = () => {

    const [addNewFieldsToFormState, setAddNewFieldsToFormState] = useRecoilState(addNewFieldsToForm);

    return (
        <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-row flex-1"/>
                    <div className="flex flex-row">
                        <div className="flex flex-row space-x-3">
                            <div className="flex flex-row items-center space-x-1">
                                <div className="flex rounded-full p-2 hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out" onClick={() =>
                                    setAddNewFieldsToFormState(addNewFieldsToFormState -1)
                                }>
                                    <Delete className="text-sm text-indigo-200" />
                                </div>
                                <div className="flex rounded-full p-2 hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                                    <ArrowUpward className="text-sm text-indigo-200" />
                                </div>
                                <div className="flex rounded-full p-2 hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                                    <ArrowDownward className="text-sm text-indigo-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 flex flex-col mt-3 w-full">
                    <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                    <input
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text"
                        value="Email address"
                        placeholder="Email address" />
                </div>

            <div className="mb-4 flex flex-col mt-3">
                <p className="text-xs text-indigo-500 mb-1">CONTACT PROP</p>
                <input
                    className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    style={{border: 'none'}}
                    type="text"
                    value="Email address"
                    placeholder="Email address" />
            </div>
        </div>
    );
};

export default AddField;
