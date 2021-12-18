import React from 'react';

const AddMessages = () => {
    return (
        <div className="flex w-full flex flex-col bg-white border border-1 border-indigo-500 rounded-sm px-10 py-12">
            <div className="max-w-5xl">
                <p className="text-xl text-gray-800">
                    Messages
                </p>
                <p className="text-gray-500 mt-3">
                    Add messages to your email sequence and specify a time delay for each message before it gets sent.
                </p>
            </div>
        </div>
    );
};

export default AddMessages;
