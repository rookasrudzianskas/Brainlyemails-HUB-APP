import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {addNewFieldsToForm} from "../../../../../contentManagement/atoms/AddNewFieldsToForm/AddNewFieldsToForm";
import {ArrowDownward, ArrowUpward, Delete} from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";

const AddField = () => {

    const [addNewFieldsToFormState, setAddNewFieldsToFormState] = useRecoilState(addNewFieldsToForm);
    const [show, setShow] = useState(false);
    return (
        <div className="flex flex-col border-b-[1px] border-indigo-200">
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

            <div className="flex flex-col mt-3">
                <p className="text-xs text-indigo-500 mb-1">CONTACT PROP</p>
                <input
                    className="appearance-none bg-gray-100 mb-7 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    style={{border: 'none'}}
                    type="text"
                    value="Email address"
                    placeholder="Email address" />
            </div>

            <div className="-mt-6">
                {show ? (
                    <div className="flex h-[3rem] mb-2 items-center hover:cursor-pointer" onClick={() =>
                        setShow(!show)
                    }>
                        <div className="flex flex-row items-center">
                            <div className="flex items-center justify-center w-6 h-6  bg-indigo-500  border border-1 border-indigo-400 rounded-sm">
                                <CheckIcon className="text-white text-sm" size={10} />
                            </div>
                            <div>
                                <p className="text-gray-700 text-md ml-2 truncate">Required</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex h-[3rem] mb-2 items-center hover:cursor-pointer" onClick={() =>
                        setShow(!show)
                    }>
                        <div className="flex flex-row items-center">
                            <div className="flex w-6 h-6 border border-1 border-gray-300"/>
                            <div className="overflow-hidden">
                                <p className="text-gray-700 text-md  ml-2 truncate text-ellipsis overflow-hidden">Required</p>
                            </div>
                        </div>


                    </div>
                )}
            </div>

        </div>
    );
};

export default AddField;
