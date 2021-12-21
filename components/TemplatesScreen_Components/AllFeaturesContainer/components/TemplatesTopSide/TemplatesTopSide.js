import React from 'react';

const TemplatesTopSide = () => {
    return (
        <div className="">
            <div className="flex-col">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row flex-1">
                        <p className="text-xl text-gray-800 hover:cursor-pointer">Templates</p>
                    </div>
                    <div className="flex flex-row space-x-4 items-center">
                        <div className="flex flex-row text-indigo-500 hover:underline hover:text-indigo-400 transition duration ease-in-out cursor-pointer">
                            <p>Template gallery</p>
                        </div>
                        <div className="flex flex-row bg-indigo-500 text-gray-100 px-3 py-2 hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out rounded-sm">
                            <p>+ New Template</p>
                        </div>
                    </div>
                </div>
                <div className="my-7">
                    <p className="text-gray-500">Create your first email template. It's super handy and extremely easy :)</p>
                </div>
            </div>
        </div>
    );
};

export default TemplatesTopSide;
