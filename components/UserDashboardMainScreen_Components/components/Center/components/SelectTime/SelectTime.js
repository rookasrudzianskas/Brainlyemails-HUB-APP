import React from 'react';

const SelectTime = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-1"/>
            <div className="flex space-x-2">
                <p className="text-sm text-gray-800">30 days</p>
                <p className="text-sm text-gray-800">24 hours</p>
            </div>
        </div>
    );
};

export default SelectTime;
