import React from 'react';

const NewContact = () => {
    return (
        <div className="flex flex-row mt-1 items-center ">
            <div className="flex flex-1">
                <p className="text-xl text-gray-800">1 contacts</p>
            </div>
            <div className="flex flex-row items-center bg-indigo-500 py-2 px-3 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                <p className="text-gray-100">+ New Contact</p>
            </div>
        </div>
    );
};

export default NewContact;