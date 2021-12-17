import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewAutomation from "../AllFeaturesContainer/components/NewAutomation";
import AutomationsSection from "../AllFeaturesContainer/components/AutomationsSection";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <AllFeaturesContainer />
            <NewAutomation />
            <AutomationsSection />
        </div>
    );
};

export default Center;
