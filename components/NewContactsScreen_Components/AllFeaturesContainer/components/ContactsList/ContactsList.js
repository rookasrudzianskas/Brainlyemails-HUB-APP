import React from 'react';
import Contact from "../Contact";

const ContactsList = () => {
    return (
        <div className="px-10  mb-10 flex flex-col">
            {/* @TODO mapping of the contacts*/}
            <Contact />
            <Contact />
            <Contact />
        </div>
    );
};

export default ContactsList;
