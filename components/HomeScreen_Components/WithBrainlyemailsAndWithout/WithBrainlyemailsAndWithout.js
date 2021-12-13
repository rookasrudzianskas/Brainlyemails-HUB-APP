import React from 'react';

const WithBrainlyemailsAndWithout = () => {
    return (
        <div className="flex flex-row items-center justify-center m-20 space-x-10">
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
    );
};

export default WithBrainlyemailsAndWithout;
