import React from 'react';
import NewContact from "../AllFeaturesContainer/components/NewContact";
import ContactsComponent from "../AllFeaturesContainer/components/ContactsComponent/ContactsComponent";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <NewContact />
            <ContactsComponent />
            <ContactsList />
        </div>
    );
};

export default Center;
