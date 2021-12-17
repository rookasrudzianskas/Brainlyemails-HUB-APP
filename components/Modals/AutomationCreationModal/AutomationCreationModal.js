import React from 'react';
import {useRecoilState} from "recoil";
import {
    handleCreateAutomationModal,
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {newAutomationName} from "../../../contentManagement/atoms/NewAutomations/NewAutomations";
import {useRouter} from "next/router";

const AutomationCreationModal = () => {
    const [handleCreateAutomationModalState, setHandleCreateAutomationModalState] = useRecoilState(handleCreateAutomationModal);
    const [newAutomationNameState, setNewAutomationNameState] = useRecoilState(newAutomationName);
    const router = useRouter();

    return (
        <div>
            <div
                className="py-12 bg-indigo-500 opacity-90 transition duration-150 ease-in-out absolute top-0 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-[50rem] md:w-[50rem] max-w-8xl">
                    <div className="relative mt-[10rem]  z-50 opacity-100 py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">


                        <div>
                            <p className="text-xl text-gray-800">Create new automation</p>

                            <div className="mt-3">
                                <p className="text-md text-gray-500">Automation allows you to send an email or email sequence
                                    to your users automatically when they meet specified conditions.
                                    This is perfect for on-boarding, boosting trial-to-paid conversion, re-engaging inactive users.</p>
                            </div>

                            <div className="mt-5 flex flex-col">
                                <p className="font-semibold text-indigo-500 mb-1">Name</p>
                                <input
                                    className="shadow appearance-none border border border-indigo-200 rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="eg. Onboarding sequence" value={newAutomationNameState}
                                    onChange={(e) => setNewAutomationNameState(e.target.value)}
                                />

                            </div>
                        </div>

                        <div className="flex items-center justify-start w-full mt-8">
                            <div className="flex flex-1">
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 px-5 py-1 border rounded text-sm"
                                    onClick={() => setHandleCreateAutomationModalState(!handleCreateAutomationModalState)}>
                                    Cancel
                                </button>
                                <button
                                    onClick={() => router.push('/projects/rokasrudzianskas/hub/new')}
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Create automation
                                </button>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setHandleCreateAutomationModalState(!handleCreateAutomationModalState)}>
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

export default AutomationCreationModal;
