import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewForm from "../AllFeaturesContainer/components/NewForm";
import EmailsSection from "../AllFeaturesContainer/components/EmailsSection";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <AllFeaturesContainer />
            <NewForm />
            <EmailsSection />
        </div>
    );
};

export default Center;
