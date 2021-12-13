import React from 'react';
import {CODE} from "../../../data/CodeCards/code";

const Code4Times = () => {
    // console.log(codes)
    // console.log(CODE[0].text);
    const firstText = CODE[0].text;
    const secondText = CODE[1].text;
    const thirdText = CODE[2].text;
    const fourthText = CODE[3].text;

    return (
        <div className="space-x-2 flex flex-row">
            <div className={`bg-blue-900 flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`text-blue-700 hover:text-blue-400 cursor-pointer transition duration-150 ease-in-out`}>{firstText}</h1>
            </div>

            <div className={`bg-green-900 flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`text-green-700 hover:text-green-400 cursor-pointer transition duration-150 ease-in-out`}>{secondText}</h1>
            </div>

            <div className={`bg-yellow-900 flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`text-yellow-700 hover:text-yellow-400 cursor-pointer transition duration-150 ease-in-out`}>{thirdText}</h1>
            </div>

            <div className={`bg-red-900 flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`text-red-700 hover:text-red-400 cursor-pointer transition duration-150 ease-in-out`}>{fourthText}</h1>
            </div>
        </div>
    );
};

export default Code4Times;
