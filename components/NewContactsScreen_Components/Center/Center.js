import React from 'react';
import NewContact from "../AllFeaturesContainer/components/NewContact";
import ContactsComponent from "../AllFeaturesContainer/components/ContactsComponent/ContactsComponent";
import ContactsList from "../AllFeaturesContainer/components/ContactsList";

const Center = () => {
    return (
        <div className="flex flex-1 flex-col bg-transparent h-screen">
            <NewContact />
            <ContactsComponent />
        </div>
    );
};

export default Center;
