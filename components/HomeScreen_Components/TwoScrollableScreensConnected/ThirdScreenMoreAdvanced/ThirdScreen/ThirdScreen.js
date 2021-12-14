import React from 'react';
import Top from "../../SecondScreen/components/Top";
import Bottom from "../../SecondScreen/components/Bottom";

const ThirdScreen = () => {
    return (
        <div className="w-screen h-screen bg-red-500 flex flex-col">
            <Top />
            <Bottom />
        </div>
    );
};

export default ThirdScreen;
