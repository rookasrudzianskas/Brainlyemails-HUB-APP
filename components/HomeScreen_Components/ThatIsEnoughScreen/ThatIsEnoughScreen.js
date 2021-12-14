import React from 'react';

const ThatIsEnoughScreen = () => {
    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center">
            <div className="flex flex-col">
                <div className="">
                   <div className="flex flex-col">
                       <div>
                           <div className="max-w-6xl cursor-pointer">
                               <h1 className="text-8xl font-bold text-white">That's probably enough for now. What are you waiting for?</h1>
                           </div>

                       </div>
                       <div className="bg-blue-500 max-w-[9rem] py-4 flex items-center justify-center rounded-sm mt-10 hover:bg-blue-400 transition duration-150 ease-in-out cursor-pointer">
                           <span className="font-bold">Go Play!</span>
                       </div>
                   </div>

                    <div className="flex flex-col justify-end">
                        <h1 className="text-3xl font-bold text-white">Rokas</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ThatIsEnoughScreen;
