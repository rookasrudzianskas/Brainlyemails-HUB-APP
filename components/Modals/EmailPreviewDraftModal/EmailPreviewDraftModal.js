import React from 'react';
import {useRecoilState} from "recoil";
import {
    handleShowEmailPreviewModal
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {emailInformationData} from "../../../contentManagement/atoms/EmailInformation/EmailInformation";

const EmailPreviewDraftModal = () => {
    const [handleShowEmailPreviewModalState, setHandleShowEmailPreviewModalState] = useRecoilState(handleShowEmailPreviewModal);
    const [emailInformationDataState, setEmailInformationDataState] = useRecoilState(emailInformationData);

    return (
        <div>
            <div
                className=" bg-indigo-500 opacity-90 transition duration-150 ease-in-out z-10 absolute -top-24 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-[50rem] md:w-[50rem] max-w-8xl">
                    <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">
                        <div className="mb-5 flex flex-row items-center">
                            <div>
                                <p className="text-xl text-gray-800">This is draft preview 👇</p>

                                <div className="flex flex-col mt-3">
                                    <div className="flex flex-row">
                                        <p className="mr-2 text-gray-400 text-sm">From:</p>
                                        <p className="text-gray-600 text-sm font-semibold ml-[16px]">{emailInformationDataState.senderEmail}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="mr-2 text-gray-400 text-sm">To:</p>
                                        <p className="text-gray-600 text-sm font-semibold ml-[33px]">{emailInformationDataState.receiverEmail}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="mr-2 text-gray-400 text-sm">Subject:</p>
                                        <p className="text-gray-600 text-sm font-semibold">{emailInformationDataState.subject}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="cursor-pointer absolute top-0 right-0 mt-8 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                                    onClick={() => setHandleShowEmailPreviewModalState(!handleShowEmailPreviewModalState)}>
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

                            {/* this is email preview */}
                                <div className="border border-1 border-indigo-200 rounded-md mb-10">
                                    <div className={`flex justify-center w-[45rem] flex-col items-center pt-12 pb-12`}>
                                        <div className="mb-8">
                                            <p className="text-2xl text-gray-800 hover:cursor-pointer">{'Company'}</p>
                                        </div>

                                        <div className="w-[39rem] h-[23rem] border border-1 border-white bg-white flex rounded-sm justify-center py-10 overflow-y-scroll scrollbar-hide">
                                            <div className="flex flex-col max-w-lg">
                                                <div>
                                                    <h1 className="text-2xl text-gray-800">Hello!</h1>
                                                </div>
                                                <div className="mt-6 hover:cursor-pointer">
                                                    <p className="text-gray-700">
                                                        {emailInformationDataState.message}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center justify-center mt-5 bg-indigo-500 max-w-[13rem] py-3 px-4 rounded-sm hover:opacity-80 cursor-pointer transition duration-150 ease-in-out">
                                                        <p className="text-gray-100 font-semibold">Look at this button!</p>
                                                    </div>
                                                </div>

                                                <div className="mt-6 hover:cursor-pointer">
                                                    <p className="text-gray-500 text-sm">This is the part of an email where you can tell your users about minor things.
                                                        For example, if they didn't request a password change, they can safely ignore the message.

                                                    </p>
                                                </div>

                                                <div className="mt-10 border-t-[1px] border-indigo-200">
                                                    <p className="text-sm text-gray-800 mt-2">Don't want to hear from us anymore?
                                                        <span className="text-indigo-500 ml-2 hover:underline cursor-pointer">Unsubscribe.</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* end of this is email preview */}
                            <div className="flex">
                                <button
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Submit
                                </button>
                                <button
                                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 px-5 py-1 border rounded text-sm"
                                    onClick={() => setHandleShowEmailPreviewModalState(!handleShowEmailPreviewModalState)}>
                                    Cancel
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default EmailPreviewDraftModal;
