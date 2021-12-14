import React from 'react';

const ThatIsEnoughScreen = () => {
    return (
        <div className="h-screen w-screen bg-black flex flex-col">
                <div className="flex flex-col flex-1  items-center justify-center">
                    <div className="flex">
                        <div className="max-w-6xl cursor-pointer">
                            <h1 className="text-8xl font-bold text-white">That's probably enough for now. <span className=" text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-400 cursor-pointer ">
                                        What are you waiting for?
                                   </span></h1>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col bg-yellow-500">
                    <h1 className="text-3xl font-bold text-white">Rokas</h1>
                </div>

        </div>
    );
};

export default ThatIsEnoughScreen;
