import React from 'react';
import NewContact from "../AllFeaturesContainer/components/NewContact";
import EmailsSection from "../AllFeaturesContainer/components/EmailsSection";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <NewContact />
            <EmailsSection />
        </div>
    );
};

export default Center;
