import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useRouter} from "next/router";

const AddNewProject = () => {

    const router = useRouter();

    return (
        <div className="">
            {/*<CreateANewProject />*/}
            <ManageNewCreatedProjectToTemplate />
        </div>
    );
};

export default AddNewProject;

export const CreateANewProject = () => {
    const router = useRouter();

    return (
        <div className=" bg-gray-100 h-screen">
            <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                            <div className="mb-6">
                                <h1 className="text-2xl font-semibold text-gray-900 mb-4">New Project</h1>
                                <h2 className="text-gray-800 max-w-xl text-lg">Projects help you stay organized — each project has its API key, sending history, settings, and more. Brainlyemails
                                    personalizes pre-made email templates with the project name you choose.</h2>
                            </div>
                            <div className="flex flex-col mb-10">
                                <span className="text-lg text-blue-900 font-semibold mb-3">Project name</span>
                                <input
                                    className="appearance-none block mb-12 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name" type="text" placeholder="My super secret project"/>
                            </div>

                            <div className="flex flex-row">
                                <div className="flex flex-1" onClick={() => router.back()}>
                                    <p className="text-gray-500 hover:underline cursor-pointer transition duration-150 ease-in-out">cancel</p>
                                </div>
                                <div className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                                    <p className="text-gray-100">Create project </p>
                                    <ArrowForwardIcon className="text-gray-100 text-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export const ManageNewCreatedProjectToTemplate = () => {
    return (
        <div className=" bg-gray-100 h-screen">
            <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
            <div className="flex flex-row items-center">
                <div className="flex flex-row flex-1 mt-16">
                    <h1 className="text-xl text-gray-800">Customize the look of your emails — step 2 of 4</h1>
                </div>

                <div className="flex flex-row mt-16 items-center space-x-4">
                    <div>
                        <p className="text-gray-500 hover:underline cursor-pointer transition duration-150 ease-in-out">Skip</p>
                    </div>

                    <div className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                        <p className="text-gray-100">Save & continue</p>
                    </div>
                </div>
            </div>
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
