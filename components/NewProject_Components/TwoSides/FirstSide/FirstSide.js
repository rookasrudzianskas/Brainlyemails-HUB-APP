import React from 'react';

const FirstSide = () => {
    return (
        <div className="bg-red-500 flex flex-1 flex-col">
            <div className="mt-5">
                <h1>Logo</h1>
            </div>

            <div className="mt-2">
                <h1 className="text-sm text-gray-300">Max size 400 kb.</h1>
            </div>
        </div>
    );
};

export default FirstSide;
