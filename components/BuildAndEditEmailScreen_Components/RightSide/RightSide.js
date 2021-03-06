import React from 'react';
import {useRecoilState} from "recoil";
import {formDataCloudState} from "../../../contentManagement/atoms/FormDataCloud/FormDataCloud";

const RightSide = () => {
    const [formDataCloudStateLayer, setFormDataCloudStateLayer] = useRecoilState(formDataCloudState);

    return (
        <div className="flex flex-1 bg-gray-100 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-8">
                    <p className="text-xl font-semibold">{formDataCloudStateLayer?.formData?.formName}</p>
                </div>


                <div className="max-w-[35rem]  w-[35rem] border border-indigo-200 bg-white px-10">
                    <div className="pt-10">
                        <p className="text-xl font-bold text-indigo-500">{formDataCloudStateLayer?.formData?.title}</p>
                    </div>

                    <div className="max-w-md mt-5">
                        <p className="text-gray-800">
                            {formDataCloudStateLayer?.formData?.description}
                        </p>
                    </div>

                    <div>
                        <div className="mb-4 flex flex-col mt-7">
                            <p className="text-xs text-indigo-500 mb-1">EMAIL ADDRESS</p>
                            <input
                                className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                style={{border: 'none'}}
                                value={formDataCloudStateLayer?.formData?.emailAddress}
                                type="text" placeholder="Email address" />
                        </div>
                    </div>

                    <div className=" flex flex-row items-center justify-center mt-10 mb-16">
                        <div className="flex flex-col bg-indigo-500 h-10 px-10 rounded-sm items-center justify-center hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                            <p className="text-gray-100 font-semibold uppercase">{formDataCloudStateLayer?.formData?.buttonLabel}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-sm text-gray-800 mt-10">
                    Powered by <span className="text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer">Brainlyemails</span>
                </p>
            </div>

        </div>
    );
};
export default RightSide;
