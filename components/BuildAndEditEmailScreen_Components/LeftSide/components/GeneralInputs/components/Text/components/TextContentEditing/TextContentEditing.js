import React from 'react';
import StyleSection from "../StyleSection/StyleSection";
import {atom, useRecoilState} from "recoil";
import {manageInputThingsData} from "../../../../../../../../../contentManagement/atoms/ManageInputThingsData/ManageInputThingsData";
import {manageEmailCreationToolsDataCloud} from "../../../../../../../../../contentManagement/atoms/ManageEmailCreationToolsDataCloud/ManageEmailCreationToolsDataCloud";

const TextContentEditing = () => {

    const [manageEmailCreationToolsDataCloudState, setManageEmailCreationToolsDataCloudState] = useRecoilState(manageEmailCreationToolsDataCloud);
    console.log("This is epic 🔥", manageEmailCreationToolsDataCloudState);

    return (
        <div className="p-6">
            <div className="flex flex-col">
                <div className="flex flex-row mb-4">
                    <p className="text-md text-indigo-500 font-semibold mb-1 flex flex-1">Content</p>
                    <div className="bg-indigo-300  text-gray-100 rounded-full px-1 flex items-center justify-center hover:bg-indigo-500 cursor-pointer transition duration-150 ease-in-out">
                        <p className="text-xs">MARKDOWN SUPPORT</p>
                    </div>
                </div>
                <div className="flex">
                    <textarea
                        className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Type something for the content"
                        value={manageEmailCreationToolsDataCloudState.Text.content}
                        rows='5'
                        style={{resize: 'none' }}
                        onChange={(e) => {
                            setManageEmailCreationToolsDataCloudState({
                                ...manageEmailCreationToolsDataCloudState,
                                Text: {
                                    ...manageEmailCreationToolsDataCloudState.Text,
                                    content: e.target.value
                                }
                            })
                        }}
                    />
                </div>

                <div>
                    <StyleSection />
                </div>

                <div className="flex flex-col mt-6">
                    <p className="text-md text-indigo-500 font-semibold mb-1 flex flex-1">Alignment</p>
                    <input
                        className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Left"
                        // value={''}
                        type="text"

                    />
                </div>

                <div className="flex flex-col mt-2">
                    <p className="text-md text-indigo-500 font-semibold mb-1 flex flex-1">Spacing</p>
                    <input
                        className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Default"
                        // value={''}
                        type="text"

                    />
                </div>

                <div className="border-b-[1px] mt-6 border-indigo-200"/>

                <div className="flex flex-col mt-9">
                    <p className="text-md text-indigo-500 font-semibold mb-1 flex flex-1">Iteration group</p>
                    <div className="-mt-1">
                        <p className="text-gray-500 text-sm mb-2">
                            Set up a reference that will Brainlyemails expect inside of `templateProps` to render a dynamic list. Learn more.
                        </p>
                    </div>
                    <input
                        className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="List"
                        // value={''}
                        type="text"

                    />
                </div>



            </div>
        </div>
    );
};

export default TextContentEditing;


