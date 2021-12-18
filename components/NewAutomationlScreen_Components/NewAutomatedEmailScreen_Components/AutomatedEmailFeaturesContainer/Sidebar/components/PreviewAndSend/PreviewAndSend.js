import React from 'react';

const PreviewAndSend = () => {
    return (
        <div className="flex flex-col mt-5">
            <div className="flex flex-row justify-center items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                <p className="text-gray-100">Add message to sequence</p>
            </div>

            <div className="mt-2">
                <p className="text-xs text-gray-400">To send this message, please, verify your email address which activates your Brainlyemails account.</p>
            </div>
        </div>
    );
};

export default PreviewAndSend;
