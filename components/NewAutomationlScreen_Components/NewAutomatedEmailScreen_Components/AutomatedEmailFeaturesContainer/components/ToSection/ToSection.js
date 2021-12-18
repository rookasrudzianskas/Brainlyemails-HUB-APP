import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {emailInformationData} from "../../../../../../contentManagement/atoms/EmailInformation/EmailInformation";

const ToSection = () => {
    const [emailInformationDataState, setEmailInformationDataState] = useRecoilState(emailInformationData);
    return (
        <div className=" py-4  border-b-[1px] border-indigo-200">
            <div className="flex flex-row items-center">
                <div className=" px-10 flex flex-1 items-center">
                    <div>
                        <p className="text-gray-400">To:</p>
                    </div>

                    <div className="ml-[58px] bg-indigo-500 px-2 rounded-sm hover:bg-indigo-400 transition duration-150 ease-in-out cursor-pointer">
                        <p className="text-gray-100 text-xs font-semibold">AUTOMATION RECIPIENT</p>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default ToSection;
