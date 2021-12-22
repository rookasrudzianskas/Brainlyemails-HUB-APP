import React from 'react';
import {Notes} from "@mui/icons-material";
import {
    manageInputThingsData
} from "../../../../../../../contentManagement/atoms/ManageInputThingsData/ManageInputThingsData";
import {useRecoilState} from "recoil";

const Text = () => {
    const [manageInputThingsDataState, setManageInputThingsDataState] = useRecoilState(manageInputThingsData);

    return (
        <div onClick={(e) => {
            setManageInputThingsDataState({
                ...manageInputThingsDataState,
                Text: {
                    isSelected: !manageInputThingsDataState.Text.isSelected,
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
