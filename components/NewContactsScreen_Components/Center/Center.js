import React from 'react';
import NewContact from "../AllFeaturesContainer/components/NewContact";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <NewContact />
            <ContactsComponent />
        </div>
    );
};

export default Center;
