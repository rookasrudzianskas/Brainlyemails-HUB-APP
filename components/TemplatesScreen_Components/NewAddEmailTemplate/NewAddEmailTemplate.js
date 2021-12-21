import React from 'react';
import Header from "../../DashboardComponents/partials/Header";
import {newEmailTemplateDataCloud} from "../../../contentManagement/atoms/NewEmailTemplateDataCloud/NewEmailTemplateDataCloud";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";

const NewAddEmailTemplate = () => {

    const [newEmailTemplateDataCloudState, setNewEmailTemplateDataCloudState] = useRecoilState(newEmailTemplateDataCloud);
    const router = useRouter();


    return (
        <div className="flex w-screen h-screen bg-gray-100 flex-col">
            <Header />

            <div className="flex w-full mt-10 items-center justify-center ">
                <div className="bg-white flex flex-col py-7 px-7 max-w-[45rem] border-indigo-500 border rounded-sm w-[45rem]">
                    <div className="flex">
                        <h1 className="text-xl text-gray-800">New email template</h1>
                    </div>

                    <div className="mt-3">
                        <h2 className="text-indigo-400">Create great looking email with no-code email builder.</h2>
                    </div>


                    <div className="mt-6">
                        <p className="text-md text-indigo-500 font-semibold mb-1">Template name</p>
                        <input
                            className="shadow-xs rounded-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Password reset template #1"
                            value={newEmailTemplateDataCloudState.templateName}
                            onChange={(e) => {
                                setNewEmailTemplateDataCloudState({
                                    ...newEmailTemplateDataCloudState,
                                    templateName: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-md text-indigo-500 font-semibold mb-1">Default subject line</p>
                        <input
                            className="shadow-xs rounded-sm appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Password reset"
                            value={newEmailTemplateDataCloudState.templateSubject}
                            onChange={(e) => {
                                setNewEmailTemplateDataCloudState({
                                    ...newEmailTemplateDataCloudState,
                                    templateSubject: e.target.value
                                })
                            }}
                        />
                    </div>


                    <div className="flex flex-row mt-16">
                        <div className="flex flex-row flex-1">
                            <p className="text-indigo-300 hover:underline transition duration-150 ease-in-out cursor-pointer">Discard</p>
                        </div>
                        <div
                            onClick={() => {
                                router.push('/projects/rokasrudzianskas/hub/new/addNewEmailTemplate');
                            }}
                            className="flex flex-row bg-indigo-500 px-2 py-2 rounded-sm hover:bg-indigo-400 transition duration-150 ease-in-out cursor-pointer">
                            <p className="text-gray-100">Create template</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NewAddEmailTemplate;
