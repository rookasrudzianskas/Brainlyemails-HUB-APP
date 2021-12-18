import React from 'react';
import {useRecoilState} from "recoil";
import {emailInformationData} from "../../../../../../contentManagement/atoms/EmailInformation/EmailInformation";

const FromSection = () => {
    const [emailInformationDataState, setEmailInformationDataState] = useRecoilState(emailInformationData);

    return (
        <div className="px-10 py-8 border-b-[1px] border-indigo-200">
            <div className="flex flex-row items-center">
                <div>
                    <p className="text-gray-400">From:</p>
                </div>

                <div className="ml-10">
                    <p className="text-gray-600">{emailInformationDataState.senderEmail}</p>
                </div>

                <div className="ml-7 px-2 hover:bg-gray-200 rounded-full transition duration-150 ease-in-out cursor-pointer">
                    <p className="text-sm text-gray-500 font-semibold">CHANGE</p>
                </div>
            </div>
        </div>
    );
};

export default FromSection;
