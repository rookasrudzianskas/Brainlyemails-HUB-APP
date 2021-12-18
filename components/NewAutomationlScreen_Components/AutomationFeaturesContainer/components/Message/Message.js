import React from 'react';
import {useRecoilState} from "recoil";
import {emailInformationData} from "../../../../../contentManagement/atoms/EmailInformation/EmailInformation";

const Message = () => {
    const [emailInformationDataState, setEmailInformationDataState] = useRecoilState(emailInformationData);


    return (
        <div className="mx-10 bg-white rounded-sm w-full pb-4 hover:shadow-md cursor-pointer transition duration-150 ease-in-out">
            <div className="flex flex-row items-center space-x-10 pl-10">
                <div className="flex bg-indigo-300 max-w-[35px] w-[35px] items-center justify-center rounded-full">
                    <p className="text-xs text-white font-bold"># 1</p>
                </div>

                <div className="flex-row flex flex-1 items-center">
                    <div className="flex flex-col space-y-3 mt-9">
                        <p className="text-indigo-600 text-sm">From:</p>
                        <p className="text-indigo-600 text-sm">Subject:</p>
                        <p className="text-indigo-600 text-md">{emailInformationDataState.message}</p>

                    </div>


                    <div className="flex flex-col items-center  space-y-3">
                        <p className="text-sm text-indigo-500 -ml-24">{emailInformationDataState.senderEmail}</p>
                        <p className="text-sm text-indigo-500 -ml-24 font-semibold">{emailInformationDataState.subject}</p>
                    </div>

                    {/*<div className="flex">*/}
                    {/*    Rokas*/}
                    {/*</div>*/}
                </div>



                <div className="flex px-7">
                    <p className="text-indigo-500 hover:text-indigo-400 hover:underline transition duration-150 ease-in-out cursor-pointer">Options...</p>
                </div>
            </div>


        </div>
    );
};

export default Message;
