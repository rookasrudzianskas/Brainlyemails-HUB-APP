import React from 'react';
import TextComponent from "../SmallerComponents/TextComponent";

const FirstSide = () => {
    return (
        <div className="bg-red-500 flex-1 overflow-y-scroll scrollbar-hide h-screen ">
            {/* @TODO to make it snap*/}
            <div className="mb-96">

            </div>
            <div className="flex flex-col items-center justify-center  space-y-[30rem]">
                <TextComponent />
                <TextComponent />
                <TextComponent />
            </div>

            <div className="mb-96">

            </div>
        </div>
    );
};

export default FirstSide;
