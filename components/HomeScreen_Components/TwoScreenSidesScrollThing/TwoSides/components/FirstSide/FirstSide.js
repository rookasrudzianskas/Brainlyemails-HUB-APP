import React from 'react';
import TextComponent from "../SmallerComponents/TextComponent";

const FirstSide = () => {
    return (
        <div className="bg-red-500 flex-1 overflow-y-scroll scrollbar-hide h-screen flex flex-col items-center justify-center">
            <TextComponent />
            <TextComponent />
            <TextComponent />
        </div>
    );
};

export default FirstSide;
