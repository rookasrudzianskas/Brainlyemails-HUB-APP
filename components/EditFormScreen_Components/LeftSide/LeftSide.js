import React from 'react';
import NavigationComponent from "./components/NavigationComponent";

const LeftSide = () => {
    return (
        <div className="flex flex-1">
            <div className="flex flex-row w-[17rem]">

            </div>
            <div className="flex flex-row flex-1 bg-gray-100">
                <NavigationComponent />
                <FormContent />
            </div>
        </div>
    );
};

export default LeftSide;
