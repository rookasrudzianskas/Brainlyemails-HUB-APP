import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewForm from "../AllFeaturesContainer/components/NewForm";
import FormsSection from "../AllFeaturesContainer/components/FormsSection";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <AllFeaturesContainer />
            <NewForm />
            <FormsSection />
        </div>
    );
};

export default Center;
