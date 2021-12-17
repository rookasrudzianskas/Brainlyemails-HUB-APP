import React from 'react';
import {useRecoilState} from "recoil";
import {
    handleDiscardEmailModal,
    handleEmailSchedulingSystemModal
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {TIMES} from "../../../data/SendingTimes/SendingTimes";
import Times from "../../NewEmailScreen_Components/EmailFeaturesContainer/Sidebar/components/Times";
import CodeIcon from '@mui/icons-material/Code';

const EmailSchedulingSendModal = () => {
    const [handleEmailSchedulingSystemModalState, setHandleEmailSchedulingSystemModalState] = useRecoilState(handleEmailSchedulingSystemModal);

    return (
        <div>
            <div
                className="py-12 bg-indigo-500 opacity-90 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">


                        <div>
                            <p className="text-xl text-gray-800">Schedule delivery</p>

                            <div className="mt-6">
                                {TIMES.map((time, index) => (
                                    <div key={index} className="flex flex-col">
                                        <Times time={time} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2 mt-6">
                            <div className="border border-1 border-indigo-200 px-2 max-w-[8rem] flex items-center justify-center py-1 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                                <p className="text-gray-800">20 Dec 2021</p>
                            </div>

                            <div className="border border-1 border-indigo-200 px-2 max-w-[3rem] flex items-center justify-center py-1 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                                <p className="text-gray-800 mr-1">08</p>
                                <CodeIcon className="rotate-90 text-gray-800 text-xs" />
                            </div>

                            <div className="border border-1 border-indigo-200 px-2 max-w-[3rem] flex items-center justify-center py-1 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                                <p className="text-gray-800 mr-1">00</p>
                                <CodeIcon className="rotate-90 text-gray-800 text-xs" />
                            </div>
                        </div>

                        <div className="flex items-center justify-start w-full mt-8">
                            <div className="flex flex-1">
                            </div>

                            <div className="flex">
                                <button
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Submit
                                </button>
                                <button
                                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 px-5 py-1 border rounded text-sm"
                                    onClick={() => setHandleEmailSchedulingSystemModalState(!handleEmailSchedulingSystemModalState)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setHandleEmailSchedulingSystemModalState(!handleEmailSchedulingSystemModalState)}>
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

export default EmailSchedulingSendModal;
