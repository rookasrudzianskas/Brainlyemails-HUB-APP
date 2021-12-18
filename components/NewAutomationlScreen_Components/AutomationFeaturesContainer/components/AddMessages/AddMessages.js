import React from 'react';

const AddMessages = () => {
    return (
        <div className="flex w-full flex flex-col bg-white border border-1 border-indigo-500 rounded-sm ">
            <div className="px-10 pt-12">
                <div className="max-w-5xl">
                    <p className="text-xl text-gray-800">
                        Messages
                    </p>
                    <p className="text-gray-500 mt-3">
                        Add messages to your email sequence and specify a time delay for each message before it gets sent.
                    </p>
                </div>

            </div>

            <div className="bg-indigo-100 py-10 mt-6 flex items-center justify-center">
                <div className="flex">
                    <p className="flex text-indigo-500 hover:underline cursor-pointer transition duration-150 ease-in-out">+ Add message</p>
                </div>
            </div>
        </div>
    );
};

export default AddMessages;