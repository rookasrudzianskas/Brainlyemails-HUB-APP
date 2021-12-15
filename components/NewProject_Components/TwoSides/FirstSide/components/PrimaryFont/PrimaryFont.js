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

        </div>
    );
};

export default PrimaryFont;
