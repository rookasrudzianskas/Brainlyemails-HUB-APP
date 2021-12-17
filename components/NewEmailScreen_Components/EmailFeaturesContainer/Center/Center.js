import React from 'react';
import FromSection from "../components/FromSection";
import ToSection from "../components/ToSection";
import SubjectSection from "../components/SubjectSection";
import EmailBodySection from "../components/EmailBodySection";
import {handleTextEditorAndTemplate} from "../../../../contentManagement/atoms/HandleTextEditorAndTemplateState/HandleTextEditorAndTemplateState";
import {useRecoilState} from "recoil";
import ChooseASpecificEmailTemplate from "../components/ChooseASpecificEmailTemplate";
import {handleShowEmailPreviewModal} from "../../../../contentManagement/atoms/HandleModalStates/HandleModalStates";

const Center = () => {
    const [handleTextEditorAndTemplateState, setHandleTextEditorAndTemplateState] = useRecoilState(handleTextEditorAndTemplate);
    const [handleShowEmailPreviewModalState, setHandleShowEmailPreviewModalState] = useRecoilState(handleShowEmailPreviewModal);

    return (
        <div className="flex w-[50rem] flex flex-col bg-white border border-1 border-indigo-500 rounded-sm">
            <FromSection />
            <ToSection />
            <SubjectSection />
            {!handleTextEditorAndTemplateState || !handleShowEmailPreviewModalState && <EmailBodySection />}
            {handleTextEditorAndTemplateState || handleShowEmailPreviewModalState && <ChooseASpecificEmailTemplate />}
        </div>
    );
};

export default Center;
