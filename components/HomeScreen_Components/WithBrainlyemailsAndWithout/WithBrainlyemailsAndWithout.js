import React from 'react';

const WithBrainlyemailsAndWithout = () => {
    return (
        <div className="grid grid-cols-1 w-screen h-screen snap-y snap-mandatory">
            <div className="grid grid-cols-2 m-20 space-x-10">
                <div className="flex flex-1 flex-col items-center">
                    <span className="my-5 font-bold">Without Brainlyemails</span>
                    <div className=" flex flex-1 bg-red-500 items-center justify-center px-80 max-w-2xl py-56">
                        <p>Rokas</p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center ">
                    <span className="my-5 font-bold">   With Brainlyemails</span>
                    <div className="flex flex-1 bg-blue-500 items-center justify-center px-80 max-w-2xl py-56">
                        <p>Rokas</p>
                    </div>
                </div>


            </div>
                <div className="flex items-center justify-center mt-36 mb-10">
                    <span className="text-lg text-gray-300 hover:cursor-pointer">(Keep scrolling to compare)</span>
                </div>
        </div>
    );
};

export default WithBrainlyemailsAndWithout;
