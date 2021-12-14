import React from 'react';
import DashboardMainChart from "../../Charts/DashboardMainChart";

const CombinedSending = () => {
    return (
        <div className="bg-transparent border border-1 border-gray-900 p-10 flex w-[50rem]">
            <div className="flex flex-row items-center">
                <div className="flex flex-grow">
                    <p className="text-gray-300 text-xl">Combined sending</p>
                </div>

                <div className="flex flex-col ml-[18rem]">
                    <p className="text-gray-400">30 days</p>
                    <p className="text-gray-700 ml-[3rem] text-sm font-bold">0</p>
                </div>
            </div>

            <DashboardMainChart />
        </div>
    );
};

export default CombinedSending;
