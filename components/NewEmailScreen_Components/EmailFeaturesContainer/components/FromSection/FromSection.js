import React from 'react';

const FromSection = () => {
    return (
        <div className="px-10 py-8">
            <div className="flex flex-row items-center">
                <div>
                    <p className="text-gray-400">From:</p>
                </div>

                <div className="ml-10">
                    <p className="text-gray-600">rokas@byrookas.com</p>
                </div>

                <div className="ml-7 px-2 hover:bg-gray-200 rounded-full transition duration-150 ease-in-out cursor-pointer">
                    <p className="text-sm text-gray-500 font-semibold">CHANGE</p>
                </div>
            </div>
        </div>
    );
};

export default FromSection;
