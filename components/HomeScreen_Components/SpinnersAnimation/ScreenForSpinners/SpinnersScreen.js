import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import IOS_LOADING from '../../../../Animations/LottieFiles/IOS_LOADING.json';

const SpinnersScreen = () => {
    return (
        <div className="w-screen h-screen bg-red-500">
            <Player
                autoplay
                loop
                src={IOS_LOADING}
                style={{height: 400, width: 400}}
            />
        </div>
    );
};

export default SpinnersScreen;
