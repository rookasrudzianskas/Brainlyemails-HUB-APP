import React from 'react';
import {Notes} from "@mui/icons-material";
import {useRecoilState} from "recoil";
import {manageEmailCreationToolsDataCloud} from "../../../../../../../contentManagement/atoms/ManageEmailCreationToolsDataCloud/ManageEmailCreationToolsDataCloud";

const Text = () => {
    const [manageEmailCreationToolsDataCloudState, setManageEmailCreationToolsDataCloudState] = useRecoilState(manageEmailCreationToolsDataCloud);

    return (
        <div onClick={(e) => {
            setManageEmailCreationToolsDataCloudState({
                ...manageEmailCreationToolsDataCloudState,
                Text: {
                    isSelected: !manageEmailCreationToolsDataCloudState.Text.isSelected,
                }
            })
        }
        } className="px-6 py-3 flex flex-row space-x-2 text-indigo-200 hover:bg-indigo-200 hover:text-indigo-500 cursor-pointer transition duration-150 ease-in-out">
            <Notes />
            <p>Text</p>
        </div>
    );
};

export default Text;

