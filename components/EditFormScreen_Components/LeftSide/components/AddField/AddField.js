import React from 'react';

const AddField = () => {
    return (
        <div className="">
            <div className="mb-4 flex flex-col mt-3">
                <p className="text-xs text-indigo-500 mb-1">TITLE</p>
                <input
                    className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    style={{border: 'none'}}
                    type="text"
                    value="Email address"
                    placeholder="Email address" />
            </div>

            <div className="mb-4 flex flex-col mt-3">
                <p className="text-xs text-indigo-500 mb-1">CONTACT PROP</p>
                <input
                    className="appearance-none bg-gray-100 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    style={{border: 'none'}}
                    type="text"
                    value="Email address"
                    placeholder="Email address" />
            </div>
        </div>
    );
};

export default AddField;
