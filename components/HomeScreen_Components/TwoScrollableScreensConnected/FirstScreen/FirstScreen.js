import React from 'react';
import Bottom from "./components/Bottom";
import Top from "./components/Top";

const FirstScreen = () => {
    return (
        <div className="w-screen h-screen bg-red-500 flex flex-row">
            <Top />
            <Bottom />
        </div>
    );
};

export default FirstScreen;
