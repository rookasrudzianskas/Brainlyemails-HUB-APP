import React from 'react';
import IOS_BASIC_LOADING from '../../../../../Animations/LottieFiles/IOS_BASIC_LOADING.json';
import { Player } from "@lottiefiles/react-lottie-player";

const PlayerOfSpinner = ({position, height, width, frontBack, otherSide}) => {
    return (
        <div className="absolute">
            <div className={`${position} ${frontBack} ${otherSide}`}>
                <Player
                    autoplay
                    loop
                    src={IOS_BASIC_LOADING}
                    style={{height: height, width: width}}
                />
            </div>
        </div>
    );
};

export default PlayerOfSpinner;
