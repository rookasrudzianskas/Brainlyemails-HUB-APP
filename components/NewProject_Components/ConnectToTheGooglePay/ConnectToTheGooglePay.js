import React from 'react';
import TemplatesScreen from "../ManageNewCreatedProjectToATemplate/GridTemplates/TemplatesScreen/TemplatesScreen";
import GoogleIcon from '@mui/icons-material/Google';

const ConnectToTheGooglePay = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row flex-1 mt-16">
                            <h1 className="text-xl text-gray-800">Import contacts — step 4 of 4</h1>
                        </div>

                        <div className="flex flex-row mt-16 items-center space-x-4 ">
                            <div>
                                <p className="text-gray-500 hover:underline cursor-pointer transition duration-150 ease-in-out">Skip</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <main className="inline-block min-w-full shadow  hover:opacity-80 transition duration-150 ease-in-out cursor-pointer rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                                    <div className="flex flex-row">
                                        <div className="flex flex-row flex-1 items-center">
                                            <p className="text-gray-800 text-xl font-semibold">Connect to the Google Pay</p>
                                            <span className="ml-3 text-sm text-gray-400">(takes 10 seconds)</span>
                                        </div>
                                        <div className="flex">
                                            <GoogleIcon size={40} className="text-2xl" />
                                        </div>
                                    </div>

                                <div className="flex max-w-3xl text-gray-500">
                                    Import your customers from the Google environment. Google integration will keep data about your
                                    customers always up-to-date - new customers will be added automatically, and information about
                                    existing customers will be updated continuously. This is useful for sending targeted messages
                                    and setting up email automation.
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectToTheGooglePay;
