import React from 'react';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";

const EmailsChart = () => {
    return (
        <div className="bg-white mt-5 py-10 border border-1 border-indigo-500 rounded-sm">
            <div className="grid px-10 grid-cols-4 ">
                <div className="">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Emails sent</p>
                            <p  className="text-xl">0</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Opens</p>
                            <p  className="text-xl">0%
                            <span>
                                0
                            </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Emails sent</p>
                            <p  className="text-xl">0</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Emails sent</p>
                            <p  className="text-xl">0</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default EmailsChart;
