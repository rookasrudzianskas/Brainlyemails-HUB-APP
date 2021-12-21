import React from 'react';
import Header from "../../DashboardComponents/partials/Header";

const NewAddEmailTemplate = () => {
    return (
        <div className="flex w-screen h-screen bg-gray-100 flex-col">
            <Header />

            <div className="flex w-full mt-10 items-center justify-center">
                <div className="bg-white flex flex-col py-7 px-7 max-w-[45rem] w-[45rem]">
                    <div className="flex">
                        <h1 className="text-xl text-gray-800">New email template</h1>
                    </div>

                    <div>
                        <h2 className="text-indigo-400">Create great looking email with no-code email builder.</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewAddEmailTemplate;
