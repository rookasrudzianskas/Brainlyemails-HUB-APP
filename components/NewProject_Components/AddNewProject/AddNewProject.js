import React, {useState} from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useRouter} from "next/router";
import ManageNewCreatedProjectToTemplate from "../ManageNewCreatedProjectToATemplate";
import {useRecoilState} from "recoil";
import {projectName} from "../../../contentManagement/atoms/ProjectName/ProjectName";
import AddNewTemplatesToEmailCampaign from "../AddNewTemplatesToEmailCampaign";

const AddNewProject = () => {

    const router = useRouter();

    return (
        <div className="">
            {/*<CreateANewProject />*/}
            {/*<ManageNewCreatedProjectToTemplate />*/}
            <AddNewTemplatesToEmailCampaign />
        </div>
    );
};

export default AddNewProject;

export const CreateANewProject = () => {
    const router = useRouter();

    const [newProjectName, setNewProjectName] = useState('');
    // 👇 this writes the name of project into the datastore
    const [newProjectNameState, setNewProjectNameState] = useRecoilState(projectName);
    setNewProjectNameState(newProjectName);

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
                                    id="grid-last-name" type="text"
                                    value={newProjectName}
                                    onChange={(e) => setNewProjectName(e.target.value)}
                                    placeholder="My super secret project"/>
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
