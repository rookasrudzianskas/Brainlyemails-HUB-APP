import React from 'react';
import AllFeaturesContainer from "../AllFeaturesContainer";
import NewMessage from "../AllFeaturesContainer/components/NewMessage";
import EmailsSection from "../AllFeaturesContainer/components/EmailsSection";
import TemplatesTopSide from "../AllFeaturesContainer/components/TemplatesTopSide";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <TemplatesTopSide />
            <AllFeaturesContainer />
            {/*<NewMessage />*/}
            {/*<EmailsSection />*/}
        </div>
    );
};

export default Center;
