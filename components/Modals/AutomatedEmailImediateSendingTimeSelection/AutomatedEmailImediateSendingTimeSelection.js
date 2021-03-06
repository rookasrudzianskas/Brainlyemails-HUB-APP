import React from 'react';
import {useRecoilState} from "recoil";
import {
    handleAutomatedMessageSendingTimeModal
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import CodeIcon from '@mui/icons-material/Code';

const AutomatedEmailImediateSendingTimeSelection = () => {
    const [handleAutomatedMessageSendingTimeModalState, setHandleAutomatedMessageSendingTimeModalState] = useRecoilState(handleAutomatedMessageSendingTimeModal);

    return (
        <div>
            <div
                className="py-12 bg-indigo-500 opacity-90 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-[10rem] md:w-2/3 max-w-4xl">
                    <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">


                        <div>
                            <p className="text-xl text-gray-800">Select sending time</p>

                            <div className="mt-6">
                                <p className="text-md text-gray-500">How long should we wait to send this email? Once the trigger conditions were met, we can send the email immediately or after defined delay.</p>
                            </div>


                            <div className="mt-5 flex flex-col">
                                <p className="text-indigo-500 font-semibold hover:cursor-pointer">When to send</p>

                                <div className="flex flex-row max-w-xl space-x-3 items-center mt-4">
                                    <div className="bg-gray-100 w-[7rem] px-2 py-2 hover:bg-indigo-200 border border-indigo-400 cursor-pointer transition duration-150 ease-in-out rounded-sm">
                                        <p className="text-gray-800">0</p>
                                    </div>
                                    <div className="flex flex-row items-center bg-gray-100 w-[7rem] px-2 py-2 hover:bg-indigo-200 border border-indigo-400 cursor-pointer transition duration-150 ease-in-out rounded-sm">
                                        <p className="text-gray-800 flex flex-1">minutes</p>
                                        <CodeIcon className="rotate-90 text-sm flex" />
                                    </div>
                                    <div>
                                        <p className="text-gray-800 cursor-pointer">after the trigger conditions were met</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-start w-full mt-8">
                            <div className="flex flex-1">
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 px-5 py-1 border rounded text-sm"
                                    onClick={() => setHandleAutomatedMessageSendingTimeModalState(!handleAutomatedMessageSendingTimeModalState)}>
                                    Cancel
                                </button>
                                <button
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Update delivery delay
                                </button>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setHandleAutomatedMessageSendingTimeModalState(!handleAutomatedMessageSendingTimeModalState)}>
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

export default AutomatedEmailImediateSendingTimeSelection;
