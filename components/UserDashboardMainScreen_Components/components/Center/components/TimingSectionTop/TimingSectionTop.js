import React from 'react';
import SelectTime from "../SelectTime";
import InformationSection from "../InformationSection";

const TimingSectionTop = () => {
    return (
        <div className="flex w-full flex-col">
            <SelectTime />
            <InformationSection />

        </div>
    );
};

export default TimingSectionTop;
