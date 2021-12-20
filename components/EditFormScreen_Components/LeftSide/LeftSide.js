import React from 'react';
import NavigationComponent from "./components/NavigationComponent";
import FormContent from "./components/FormContent";

const LeftSide = () => {
    return (
        <div className="flex flex-1">
            <div className="flex flex-row w-[17rem]">

            </div>
            <div className="flex flex-col flex-1 bg-gray-100">
                <NavigationComponent />
                <div className="flex flex-col">
                    <FormContent />
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
