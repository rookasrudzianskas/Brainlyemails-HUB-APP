import React from 'react';
import MessageLayout from "./components/MessageLayout";
import FeaturesList from "./components/FeaturesList";
import PreviewAndSend from "./components/PreviewAndSend";

const Sidebar = () => {
    return (
        <div className="flex w-[20rem] bg-transparent">
            <div>
                <p className="text-sm font-semibold text-gray-500">MESSAGE TYPE:</p>
                <MessageLayout />
                <FeaturesList />
                <PreviewAndSend />
            </div>
        </div>
    );
};

export default Sidebar;
