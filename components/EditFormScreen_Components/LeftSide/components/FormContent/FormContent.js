import React from 'react';
import GeneralInputs from "../GeneralInputs";

const FormContent = () => {
    return (
        <div className="bg-white border border-indigo-200 rounded-sm mb-10">
            <div className="py-6 px-4 border-b border-indigo-200 overflow-hidden">
                <p className="text-xl text-gray-800">Form content</p>
            </div>

            <div className="px-4 py-6  overflow-y-scroll scrollbar-hide">
                <GeneralInputs />
            </div>
        </div>
    );
};

export default FormContent;
