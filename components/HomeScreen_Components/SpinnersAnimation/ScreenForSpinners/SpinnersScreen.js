import React from 'react';
import PlayerOfSpinner from "../components/PlayerOfSpinner";

const SpinnersScreen = () => {
    return (
        <div className="snap-y snap-mandatory w-screen h-screen bg-black">
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-28"} otherSide={"right-20"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-24"} otherSide={"left-[94rem]"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"-top-[3rem]"} otherSide={"left-[12rem]"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-[48rem]"} otherSide={"left-80"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-[48rem]"} otherSide={"left-[70rem]"} />
            <PlayerOfSpinner position={"relative"} height={200} width={200} frontBack={"top-[45rem]"} otherSide={"left-[95rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[37rem]"} otherSide={"left-32"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[49rem]"} otherSide={"left-[2rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[49rem]"} otherSide={"left-[53rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[37rem]"} otherSide={"left-[85rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[3rem]"} otherSide={"left-[75rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"-top-[1rem]"} otherSide={"left-[55rem]"} />
            <PlayerOfSpinner position={"relative"} height={135} width={135} frontBack={"top-[6rem]"} otherSide={"left-[36rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[15rem]"} otherSide={"left-[50rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[1rem]"} otherSide={"left-[90rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[28rem]"} otherSide={"left-[3rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[44rem]"} otherSide={"left-[35rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[40rem]"} otherSide={"left-[65rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[50rem]"} otherSide={"left-[87rem]"} />
            <PlayerOfSpinner position={"relative"} height={90} width={90} frontBack={"top-[30rem]"} otherSide={"left-[98rem]"} />
        </div>
    );
};

export default SpinnersScreen;
