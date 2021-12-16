import React from 'react';
import FirstSide from "../TwoSides/FirstSide";
import SecondSide from "../TwoSides/SecondSide";
import TemplatesScreen from "../ManageNewCreatedProjectToATemplate/GridTemplates/TemplatesScreen/TemplatesScreen";

const AddNewTemplatesToEmailCampaign = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row flex-1 mt-16">
                            <h1 className="text-xl text-gray-800">Import templates — step 3 of 4</h1>
                        </div>

                        <div className="flex flex-row mt-16 items-center space-x-4">
                            <div>
                                <p className="text-gray-500 hover:underline cursor-pointer transition duration-150 ease-in-out">Skip</p>
                            </div>

                            <div className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                                <p className="text-gray-100">Import & continue</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                                <main className="flex items-center justify-center">
                                    <TemplatesScreen />
                                    {/*<FirstSide />*/}
                                    {/*<SecondSide />*/}
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewTemplatesToEmailCampaign;
