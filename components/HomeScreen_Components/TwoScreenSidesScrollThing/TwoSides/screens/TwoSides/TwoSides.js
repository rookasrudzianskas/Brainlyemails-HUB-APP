import React from 'react';

const TwoSides = () => {
    return (
        <div className="h-screen w-screen bg-black">
            <main>
                <FirstSide />
                <SecondSide />
            </main>
        </div>
    );
};

export default TwoSides;
