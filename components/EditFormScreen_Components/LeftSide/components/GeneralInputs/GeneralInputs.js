import React from 'react';

const GeneralInputs = () => {
    return (
        <div className="">
            <p className="text-gray-800 text-lg">General</p>


            <div>
                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                    <input
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text" placeholder="Title" />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TEXT</p>
                    <textarea
                        className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none', resize: 'none'}}
                        rows="4"
                        placeholder="Tell something cool..." />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">BUTTON LABEL</p>
                    <input
                        className="focus:outline-none outline-none appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text"
                        style={{border: 'none',     outline: 'none'}}
                        placeholder="Button text" />
                </div>
            </div>

            <div className="border-b-[1px] border-indigo-200 my-10"/>

            <div>
                <p className="text-gray-800 text-lg">Fields</p>
            </div>
        </div>
    );
};

export default GeneralInputs;
