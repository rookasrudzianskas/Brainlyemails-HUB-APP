import React from 'react';

const GeneralInputs = () => {
    return (
        <div className="">
            <p className="text-gray-800 text-lg">General</p>


            <div>
                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                    <input
                        className="shadow appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        type="text" placeholder="Title" />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">TEXT</p>
                    <textarea
                        className="shadow appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        style={{border: 'none'}}
                        placeholder="Tell something cool..." />
                </div>

                <div className="mb-4 flex flex-col mt-3">
                    <p className="text-xs text-indigo-500 mb-1">BUTTON LABEL</p>
                    <input
                        className="shadow focus:outline-none outline-none appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text"
                        style={{border: 'none',     outline: 'none'}}
                        placeholder="Button text" />
                </div>
            </div>
        </div>
    );
};

export default GeneralInputs;
