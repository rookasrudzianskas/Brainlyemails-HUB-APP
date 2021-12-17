import React from 'react';
import FromSection from "../components/FromSection";
import ToSection from "../components/ToSection";
import SubjectSection from "../components/SubjectSection";
import EmailBodySection from "../components/EmailBodySection";
import {handleTextEditorAndTemplate} from "../../../../contentManagement/atoms/HandleTextEditorAndTemplateState/HandleTextEditorAndTemplateState";
import {useRecoilState} from "recoil";
import ChooseASpecificEmailTemplate from "../components/ChooseASpecificEmailTemplate";

const Center = () => {
    const [handleTextEditorAndTemplateState, setHandleTextEditorAndTemplateState] = useRecoilState(handleTextEditorAndTemplate);

    return (
        <div className="flex w-[50rem] flex flex-col bg-white border border-1 border-indigo-500 rounded-sm">
            <FromSection />
            <ToSection />
            <SubjectSection />
            {!handleTextEditorAndTemplateState && <EmailBodySection />}
            {handleTextEditorAndTemplateState && <ChooseASpecificEmailTemplate />}
        </div>
    );
};

export default Center;
