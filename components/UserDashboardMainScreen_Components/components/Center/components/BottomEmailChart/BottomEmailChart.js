import React from 'react';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";

const BottomEmailChart = () => {
    return (
        <div className="bg-white mt-5 py-10 border border-1 border-indigo-500 rounded-sm ">
            <div className="flex flex-row px-10 space-x-10">
                <div>
                    <div className="flex w-[17rem] border-b-[1px] border-indigo-500">
                        <div className="mb-8">
                            <div className="flex flex-col items-center">
                                <p className="text-sm text-gray-400 mb-2">Subscribers</p>
                                <div className="flex flex-row items-center space-x-2">
                                    <p className="text-xl">1</p>
                                    <ShowChartIcon style={{color: '#97EB97', fontSize: 20}} />
                                    <p style={{color: '#97EB97'}} >1</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="flex flex-row items-center  mt-5">
                            <div className="flex flex-1">
                                <p className="text-sm text-gray-400">Subscribes</p>
                            </div>
                            <div className="flex">
                                <p className="text-sm text-gray-900">1</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center mt-3">
                                <div className="flex flex-1">
                                    <p className="text-sm text-gray-400">Unsubscribes</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm text-gray-900">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[40rem] bg-blue-500">
                    Rokas
                </div>
            </div>
        </div>
    );
};

export default BottomEmailChart;
