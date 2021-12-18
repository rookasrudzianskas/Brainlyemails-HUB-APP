import React, {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TodayIcon from '@mui/icons-material/Today';
import {useRecoilState} from "recoil";
import {
    handleShowEmailPreviewModal
} from "../../../../../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import {handleTextEditorAndTemplate} from "../../../../../../../contentManagement/atoms/HandleTextEditorAndTemplateState/HandleTextEditorAndTemplateState";


const FeaturesList = () => {
    const [handleTextEditorAndTemplateState, setHandleTextEditorAndTemplateState] = useRecoilState(handleTextEditorAndTemplate);
    const [handleShowEmailPreviewModalState, setHandleShowEmailPreviewModalState] = useRecoilState(handleShowEmailPreviewModal);


    return (
        <div className="mx-3 space-y-2 mt-7">

            <div onClick={() => setHandleTextEditorAndTemplateState(!handleTextEditorAndTemplateState)} className="flex flex-row py-2 px-2 hover:bg-gray-300 hover:text-gray-800 transition duration-150 ease-in-out rounded-sm cursor-pointer ">
                <MoreHorizIcon className="text-gray-400 mr-3 hover:text-gray-800" />
                <p className="text-gray-600">More options...</p>
            </div>

            <div onClick={() => setHandleShowEmailPreviewModalState(!handleShowEmailPreviewModalState)} className="flex flex-row py-2 px-2 hover:bg-gray-300 hover:text-gray-800 transition duration-150 ease-in-out rounded-sm cursor-pointer ">
                <VisibilityIcon className="text-gray-400 mr-3 hover:text-gray-800" />
                <p className="text-gray-600">Show email preview</p>
            </div>

        </div>
    );
};

export default FeaturesList;


