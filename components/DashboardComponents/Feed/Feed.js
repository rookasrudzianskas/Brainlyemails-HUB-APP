import React from 'react';
import Header from "../Header";
import CombinedSending from "../CombinedSending";
import SendingLimit from "../SendingLimit";

const Feed = () => {
    return (
        <div className="grid grid-cols-1  md:max-w-3xl  xl:max-w-6xl mx-auto">
            <Header />
            <div className="border-b border-1 border-gray-900" />

            <div className="flex flex-row mx-4 mt-[3rem] space-x-8">
                <CombinedSending />
                <SendingLimit />
            </div>

        </div>
    );
};

export default Feed;
