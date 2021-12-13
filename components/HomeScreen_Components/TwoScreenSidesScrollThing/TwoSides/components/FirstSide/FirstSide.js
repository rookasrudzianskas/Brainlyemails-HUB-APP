import React from 'react';
import TextComponent from "../SmallerComponents/TextComponent";
import {TEXT} from "../../../../../../data/TextScroll/text";

const FirstSide = () => {
    return (
        <div className="bg-black flex-1 overflow-y-scroll scrollbar-hide h-screen ">
            {/* @TODO to make it snap*/}
            <div className="mb-96">

            </div>
            <div className="flex flex-col items-center justify-center  space-y-[30rem]">
                {TEXT.map((text, index) => {
                    return <TextComponent key={index} text={text}/>
                })}
            </div>

            <div className="mb-96">

            </div>
        </div>
    );
};

export default FirstSide;
