import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {
    handleNewFormCreationModal
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {groupCreationDataCloud} from "../../../contentManagement/atoms/GroupCreationDataCloud/GroupCreationDataCloud";
import CheckIcon from "@mui/icons-material/Check";

const CreateFormModalMain = () => {
    const [handleNewFormCreationModalState, setHandleNewFormCreationModalState] = useRecoilState(handleNewFormCreationModal);
    const [groupCreationDataCloudState, setGroupCreationDataCloudState] = useRecoilState(groupCreationDataCloud);
    const [show, setShow] = useState(false);
    return (
        <div>
            <div
                className="py-12 bg-indigo-500 opacity-90 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-[40rem]">
                    <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">


                        <div>
                            <p className="text-xl text-gray-800">Create form</p>

                            <div className="mt-6">
                                <p className="text-md text-indigo-500 font-semibold mb-1">Name</p>
                                <input
                                    className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Name" />

                            </div>

                            <div className="mt-5">
                                <p className="text-md text-indigo-500 font-semibold mb-1">Add to groups</p>
                                <p className="text-sm text-gray-500">When someone subscribes via this form, he'll be automatically added to the selected groups.</p>
                            </div>

                            <div>
                                {show ? (
                                    <div className="flex h-[3rem] items-center hover:cursor-pointer" onClick={() =>
                                        setShow(!show)
                                    }>
                                        <div className="flex flex-row items-center">
                                            <div className="flex items-center justify-center w-6 h-6  bg-indigo-500  border border-1 border-indigo-400 rounded-sm">
                                                <CheckIcon className="text-white text-sm" size={10} />
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-md ml-2 truncate">{groupCreationDataCloudState[0].groupName}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex h-[3rem] items-center hover:cursor-pointer" onClick={() =>
                                        setShow(!show)
                                    }>
                                        <div className="flex flex-row items-center">
                                            <div className="flex w-6 h-6 border border-1 border-gray-300"/>
                                            <div className="overflow-hidden">
                                                <p className="text-gray-700 text-md  ml-2 truncate text-ellipsis overflow-hidden">{groupCreationDataCloudState[0].groupName}</p>
                                            </div>
                                        </div>


                                    </div>
                                )}
                            </div>


                            <div className="border-y-[1px] border-indigo-200 mt-6">
                                <div className="my-3">
                                    <p className="text-md text-indigo-500 font-semibold mb-1">Set up auto-responder</p>
                                    <p className="text-sm text-gray-500">If you want to automatically send an email to the new subscriber when he joins the selected groups, you can set up automation to do that for you.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-start w-full mt-8">
                            <div className="flex flex-1">
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 px-5 py-1 border rounded text-sm"
                                    onClick={() => setHandleNewFormCreationModalState(!handleNewFormCreationModalState)}>
                                    Discard
                                </button>
                                <button
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Save changes
                                </button>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setHandleNewFormCreationModalState(!handleNewFormCreationModalState)}>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close"
                                 className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24"
                                 strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1={18} y1={6} x2={6} y2={18}/>
                                <line x1={6} y1={6} x2={18} y2={18}/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateFormModalMain;
