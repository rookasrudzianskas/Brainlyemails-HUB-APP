import React from 'react';
import SelectTime from "../SelectTime";
import InformationSection from "../InformationSection";
import EmailsChart from "../EmailsChart";

const TimingSectionTop = () => {
    return (
        <div className="flex w-full flex-col">
            <SelectTime />
            <InformationSection />
            <EmailsChart />

        </div>
    );
};

export default TimingSectionTop;
