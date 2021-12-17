import React from 'react';
import MessageLayout from "./components/MessageLayout";

const Sidebar = () => {
    return (
        <div className="flex w-[20rem] bg-transparent">
            <div>
                <p className="text-sm font-semibold text-gray-500">MESSAGE TYPE:</p>
                <MessageLayout />
            </div>
        </div>
    );
};

export default Sidebar;
