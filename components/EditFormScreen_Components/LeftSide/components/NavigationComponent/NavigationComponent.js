import React from 'react';
import {ArrowBack} from "@mui/icons-material";

const NavigationComponent = () => {
    return (
        <div className="flex flex-row space-x-3 justify-center mt-8 ml-2">
            <div className="flex flex-row justify-center bg-indigo-200 h-10 px-2 items-center justify-center">
                <ArrowBack className="text-indigo-500 text-md" />
                <p>Go back</p>
            </div>
            <div className="flex flex-col bg-indigo-500 h-10 px-2 items-center justify-center">
                <p className="text-gray-100">Save changes</p>
            </div>
        </div>
    );
};

export default NavigationComponent;
