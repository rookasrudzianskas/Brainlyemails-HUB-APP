import React from 'react';
import FirstSide from "../../components/FirstSide";
import SecondSide from "../../components/SecondSide";

const TwoSides = () => {
    return (
        <div className="h-screen w-screen bg-black">
            <main className="flex flex-row">
                <FirstSide />
                <SecondSide />
            </main>
        </div>
    );
};

export default TwoSides;
