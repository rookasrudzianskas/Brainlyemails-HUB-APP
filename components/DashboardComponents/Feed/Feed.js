import React from 'react';
import Header from "../Header";

const Feed = () => {
    return (
        <div className="grid grid-cols-1  md:max-w-3xl  xl:max-w-6xl mx-auto">
            <Header />
            <div className="border-b border-[0.1px] border-gray-900" />
        </div>
    );
};

export default Feed;
