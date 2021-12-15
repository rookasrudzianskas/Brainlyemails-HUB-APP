import React from 'react';

const AddNewProject = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
                    <div className="py-8">

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                                <div className="mb-6">
                                    <h1 className="text-2xl font-semibold text-gray-900">New Project</h1>
                                    <h2 className="text-gray-800 max-w-xl text-lg">Projects help you stay organized — each project has its API key, sending history, settings, and more. Brainlyemails
                                        personalizes pre-made email templates with the project name you choose.</h2>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg text-blue-900 font-semibold mb-3">Project name</span>
                                    <input type="text" className="focus:outline-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProject;
