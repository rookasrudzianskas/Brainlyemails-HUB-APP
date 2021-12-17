import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewMessage from "../AllFeaturesContainer/components/NewMessage";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <AllFeaturesContainer />
            <NewMessage />
        </div>
    );
};

export default Center;
