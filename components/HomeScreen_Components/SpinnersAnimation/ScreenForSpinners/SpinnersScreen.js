import React from 'react';
import PlayerOfSpinner from "../components/PlayerOfSpinner";

const SpinnersScreen = () => {
    return (
        <div className="snap-y snap-mandatory w-screen h-screen bg-red-500">
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-28"} otherSide={"right-20"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-24"} otherSide={"left-[94rem]"} />
        </div>
    );
};

export default SpinnersScreen;
