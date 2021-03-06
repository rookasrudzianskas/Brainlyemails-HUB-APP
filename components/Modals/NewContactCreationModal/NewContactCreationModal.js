import React, {useRef} from 'react';
import {useRecoilState} from "recoil";
import {
    handleDiscardEmailModal,
    handleNewContactCreationModal
} from "../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

const NewContactCreationModal = () => {
    const [handleNewContactCreationModalState, setHandleNewContactCreationModalState] = useRecoilState(handleNewContactCreationModal);
    const inputFile = useRef(null)


    return (
        <div>
            <div
                className="py-12 bg-indigo-500 opacity-90 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal">
                <div role="alert" className="container mx-auto w-[45rem]">
                    <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white opacity-100 shadow-md rounded border border-gray-400">


                        <div>
                            <p className="text-xl text-gray-800">New contacts</p>

                            <div className="mt-6 flex w-full space-x-3">
                                <div className="flex flex-1 border border-indigo-500 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                                    <div className="p-7">
                                        <div className="flex flex-row items-center text-indigo-200 space-x-2">
                                            <FilePresentIcon className="text-4xl" />
                                            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                                            <p className="text-gray-800 text-lg">CSV import</p>
                                        </div>
                                        <div  className="max-w-sm mt-3 text-gray-800" onClick={() =>
                                            inputFile.current.click()
                                        }>
                                            <p className="">
                                                Import contacts from a CSV file. This is a common
                                                step if you're migrating your mailing list from another service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 border border-indigo-500 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                                    <div className="p-7">
                                        <div className="flex flex-row items-center text-indigo-200 space-x-2">
                                            <CloudCircleIcon className="text-4xl" />
                                            <p className="text-gray-800 text-lg">JSON API</p>
                                        </div>
                                        <div  className="max-w-sm mt-3 text-gray-800">
                                            <p className="">
                                                Manage contacts in Brainlyemails with simple HTTP JSON API. Click to learn more.
                                            </p>
                                        </div>
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
                                    onClick={() => setHandleNewContactCreationModalState(!handleNewContactCreationModalState)}>
                                    Cancel
                                </button>
                                <button
                                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-500 rounded text-white px-5 py-1 text-sm">Done
                                </button>
                            </div>
                        </div>
                        <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setHandleNewContactCreationModalState(!handleNewContactCreationModalState)}>
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

export default NewContactCreationModal;
