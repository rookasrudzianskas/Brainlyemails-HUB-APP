import React from 'react';
import GeneralInputs from "../GeneralInputs";
import {Search} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import {useRecoilState} from "recoil";
import TextContentEditing from "../GeneralInputs/components/Text/components/TextContentEditing";
import {manageEmailCreationToolsDataCloud} from "../../../../../contentManagement/atoms/ManageEmailCreationToolsDataCloud/ManageEmailCreationToolsDataCloud";

const ComponentsComponent = () => {
    const [manageEmailCreationToolsDataCloudState, setManageEmailCreationToolsDataCloudState] = useRecoilState(manageEmailCreationToolsDataCloud);

    return (
        <>
            <div className="bg-white border border-indigo-200 rounded-sm mb-10 shadow-sm overflow-y-scroll scrollbar-hide">
                <div className="py-6 px-4 border-b border-indigo-200 overflow-hidden flex flex-col justify-center">
                    <div className=" flex flex-row items-center">
                        <div className="flex flex-row items-center flex-1">
                            <p className="text-xl text-gray-800">Components</p>
                        </div>
                        <div className="flex flex-row space-x-2 bg-indigo-500 py-2 px-2 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                            <p className="text-gray-200 text-sm font-bold">+ ADD</p>
                            <p className="text-gray-100 text-sm">ALT + A</p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-row items-center rounded-sm appearance-none border rounded-sm px-1">
                        <Search className="text-gray-400" style={{fontSize: 25}} />
                        <input
                            className="shadow-xs w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Filter"
                        />
                    </div>
                </div>

                <div>

                </div>

                <div className="overflow-y-hidden scrollbar-hide">
                    {manageEmailCreationToolsDataCloudState.Text.isSelected && (
                        <TextContentEditing />
                        )}
                    {!manageEmailCreationToolsDataCloudState.Text.isSelected && (
                        <GeneralInputs />
                    )}
                    {/*<GeneralInputs />*/}
                </div>

            </div>


            <div className="-mt-7  rounded-sm text-indigo-400 flex flex-row items-center justify-center px-2 py-2 space-x-2 hover:bg-indigo-500 hover:text-indigo-100 cursor-pointer transition duration-150 ease-in-out max-w-[11rem]">
                <SettingsIcon style={{fontSize: 18}} />
                <p>Template settings</p>
            </div>
        </>
    );
};

export default ComponentsComponent;
