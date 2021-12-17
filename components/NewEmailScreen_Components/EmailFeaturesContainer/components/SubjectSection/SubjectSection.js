import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {emailInformationData} from "../../../../../contentManagement/atoms/EmailInformation/EmailInformation";

const SubjectSection = () => {

    const [emailInformationDataState, setEmailInformationDataState] = useRecoilState(emailInformationData);

    return (
        <div className="px-10 py-5  border-b-[1px] border-indigo-200">
            <div className="flex flex-row items-center">
                <div>
                    <p className="text-gray-400">Subject:</p>
                </div>

                <div className="ml-2 flex flex-1">
                    <input type="text" className="w-full outline-none" value={emailInformationDataState.subject} onChange={(e) => {
                        setEmailInformationDataState({
                            ...emailInformationDataState,
                            subject: e.target.value
                        });
                    }} placeholder="What did you ship lately?" style={{border: 'none', outline: 'none', outlineWidth: 0}} />
                </div>

            </div>
        </div>
    );
};

export default SubjectSection;
