import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {addNewFieldsToForm} from "../../../../../contentManagement/atoms/AddNewFieldsToForm/AddNewFieldsToForm";

const GeneralInputs = () => {
    const [showTheFormattingOptions, setShowTheFormattingOptions] = useState(false);
    const [addNewFieldsToFormState, setAdNewFieldsToFormState] = useRecoilState(addNewFieldsToForm);

    return (
        <div className="overflow-y-scroll">
            <p className="text-gray-800 text-lg">General</p>


            <div>
                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                    <input
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text" placeholder="Title" />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <div className="flex flex-row">
                        <p className="text-xs text-indigo-500 mb-1 flex flex-1">TEXT</p>
                        <div onClick={() => setShowTheFormattingOptions(!showTheFormattingOptions)}>
                            <p className="flex text-xs text-indigo-300 hover:underline cursor-pointer">formatting help</p>
                        </div>
                    </div>

                    {showTheFormattingOptions && (
                       <>
                           <div className="border-b-[1px] border-indigo-200 mt-5" />

                           <div className="mb-6 mt-6">
                               <div className="flex flex-col  space-y-1">
                                   <div className="flex flex-row">
                                       <p className="text-xs text-indigo-300">Links:</p>
                                       <div className="bg-gray-100 px-2 rounded-sm mx-2">
                                           <p className="text-xs text-blue-800">[Example link](http://example.com)</p>
                                       </div>
                                   </div>

                                   <div className="flex flex-row">
                                       <p className="text-xs text-indigo-300">Bold:</p>
                                       <div className="bg-gray-100 px-2 rounded-sm mx-2">
                                           <p className="text-xs text-blue-800">**Carefully** crack the eggs</p>
                                       </div>
                                   </div>

                                   <div className="flex flex-row">
                                       <p className="text-xs text-indigo-300">Italics:</p>
                                       <div className="bg-gray-100 px-2 rounded-sm mx-2">
                                           <p className="text-xs text-blue-800">hisk the eggs *vigorously*</p>
                                       </div>
                                   </div>

                                   <div className="flex flex-row">
                                       <p className="text-xs text-indigo-300">Strikethrough:</p>
                                       <div className="bg-gray-100 px-2 rounded-sm mx-2">
                                           <p className="text-xs text-blue-800">~~Scratch this~~</p>
                                       </div>
                                   </div>

                               </div>
                           </div>
                       </>
                    )}

                    <div>
                        <textarea
                            className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            style={{border: 'none', resize: 'none'}}
                            rows="4"
                            placeholder="Tell something cool..." />
                    </div>
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">BUTTON LABEL</p>
                    <input
                        className="focus:outline-none outline-none appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text"
                        style={{border: 'none',     outline: 'none'}}
                        placeholder="Button text" />
                </div>
            </div>

            <div className="border-b-[1px] border-indigo-200 my-10"/>

            <div>
                <p className="text-gray-800 text-lg">Fields</p>
            </div>

            <div>
                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                    <input
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text" placeholder="Email address" />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">CONTACT PROP</p>
                    <input
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text" placeholder="Email address"
                        value="Email address" />
                </div>

            </div>

            <div className="border-b-[1px] border-indigo-200 mt-10 mb-6"/>

            <div className=""
                onClick={() =>
                    setAdNewFieldsToFormState(addNewFieldsToFormState + 1)
                }
            >
                <p className="text-indigo-500 hover:underline hover:text-indigo-400 cursor-pointer transition duration-150 ease-in-out">+ Add field</p>
            </div>

        </div>
    );
};

export default GeneralInputs;
