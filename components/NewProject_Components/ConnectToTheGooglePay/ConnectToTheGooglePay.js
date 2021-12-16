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

                        <div className="flex flex-row mt-16 items-center space-x-4">
                            <div>
                                <p className="text-gray-500 hover:underline cursor-pointer transition duration-150 ease-in-out">Skip</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col space-y-2 p-10">
                                <main className="flex items-center">
                                    <div className="flex flex-row">
                                        <div className="flex flex-row bg-red-500">
                                            Rokas
                                            {/*<p>Connect to the Google Pay</p>*/}
                                            {/*<span>(takes 10 seconds)</span>*/}
                                        </div>
                                        <div className="flex bg-blue-500">
                                            {/*<GoogleIcon />*/}
                                            Rokas
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectToTheGooglePay;
