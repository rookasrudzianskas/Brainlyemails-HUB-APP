import React from 'react';
import GeneralInputs from "../GeneralInputs";

const ComponentsComponent = () => {
    return (
        <div className="bg-white border border-indigo-200 rounded-sm mb-10 shadow-sm">
            <div className="py-6 px-4 border-b border-indigo-200 overflow-hidden">
                <p className="text-xl text-gray-800">Components</p>
            </div>

            <div className="px-4 py-6  overflow-y-scroll scrollbar-hide">
                <GeneralInputs />
            </div>
        </div>
    );
};

export default ComponentsComponent;
