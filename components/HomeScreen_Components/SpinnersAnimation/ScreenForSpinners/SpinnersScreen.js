import React from 'react';
import PlayerOfSpinner from "../components/PlayerOfSpinner";
import FadeIn from "react-fade-in";
import ContinousComponent from "../components/ContinousComponent/ContinousComponent";

const SpinnersScreen = () => {
    return (
        <div className="snap-y snap-mandatory w-screen h-screen bg-black">
            <ContinousComponent />
            <div className="text-[12rem] font-bold text-white flex items-center justify-center flex-col opacity-60 hover:opacity-80 cursor-pointer transition duration-200 ease-in-out">
                <div className="mt-[10rem]">
                    Say good­bye to

                </div>
                <div className="">
                    Spinnageddon
                </div>
            </div>
        </div>
    );
};

export default SpinnersScreen;
