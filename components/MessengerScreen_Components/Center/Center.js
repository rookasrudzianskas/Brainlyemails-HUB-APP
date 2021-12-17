import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewMessage from "../AllFeaturesContainer/components/NewMessage";
import EmailsSection from "../AllFeaturesContainer/components/EmailsSection";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <AllFeaturesContainer />
            <NewMessage />
            <EmailsSection />
        </div>
    );
};

export default Center;
