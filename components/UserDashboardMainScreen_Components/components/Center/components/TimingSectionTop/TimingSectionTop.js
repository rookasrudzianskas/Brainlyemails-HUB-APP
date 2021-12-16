import React from 'react';
import SelectTime from "../SelectTime";
import InformationSection from "../InformationSection";
import EmailsChart from "../EmailsChart";
import BottomEmailChart from "../BottomEmailChart";

const TimingSectionTop = () => {
    return (
        <div className="flex w-full flex-col">
            <SelectTime />
            <InformationSection />
            <EmailsChart />
            <BottomEmailChart />
        </div>
    );
};

export default TimingSectionTop;
