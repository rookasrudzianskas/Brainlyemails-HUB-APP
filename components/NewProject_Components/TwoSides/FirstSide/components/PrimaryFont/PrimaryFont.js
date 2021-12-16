import React from 'react';

const PrimaryFont = () => {
    return (
        <div className="">
            <div>
                <p className="text-lg font-semibold text-gray-800">Primary font</p>
            </div>

            <div className="mt-2">
                <p className="text-gray-400 text-sm hover:cursor-pointer">
                    Choose primary font from default system fonts or a custom font from Google fonts. Custom fonts are supported in all modern email clients (over 40% market share) like Apple Mail or Mozilla Thunderbird.
                </p>
            </div>

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Font (size & line height)</h1>
            </div>

            <div className="flex space-x-3 mt-3 mb-5">
                <input
                    className="shadow appearance-none border rounded w-[10rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" value={'Lato'} />

                <input
                    className="shadow appearance-none border rounded w-[5rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" value={'20'} />

                <input
                    className="shadow appearance-none border rounded w-[4rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" value={'2'} />
            </div>
        </div>
    );
};

export default PrimaryFont;
