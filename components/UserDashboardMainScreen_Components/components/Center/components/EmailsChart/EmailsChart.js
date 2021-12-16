import React, {useState} from 'react';
import DashboardCard01 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard03";
import DashboardCard04 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard04";
import DashboardCard05 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard05";
import DashboardCard06 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard06";
import DashboardCard07 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard07";
import DashboardCard08 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard08";
import DashboardCard09 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard09";
import DashboardCard10 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard11";
import DashboardCard12 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard12";
import DashboardCard13 from "../../../../../DashboardComponents/partials/dashboard/DashboardCard13";

const EmailsChart = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className="bg-white mt-5 py-10 border border-1 border-indigo-500 rounded-sm  px-10">
            <div className="flex">
                <div className="flex flex-1">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Emails sent</p>
                            <p  className="text-xl">0</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Opens</p>
                            <p  className="text-xl">0%
                            <span className="text-sm text-gray-400 ml-2">
                                0
                            </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <p  className="text-sm text-gray-400 mb-2">Bounces</p>
                            <p  className="text-xl">0%
                                <span className="text-sm text-gray-400 ml-2">
                                0
                            </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col flex-1">
                            <p  className="text-sm text-gray-400 mb-2">Complaints</p>
                            <p  className="text-xl">0%
                                <span className="text-sm text-gray-400 ml-2">
                                0
                            </span>
                            </p>
                        </div>

                        <div className="relative inline-block text-left pl-10">
                            <div className="">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                    id="menu-button"
                                    onClick={handleShow}
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                >
                                    Emails
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/*<!--*/}
                            {/*  Dropdown menu, show/hide based on menu state.*/}

                            {/*  Entering: "transition ease-out duration-100"*/}
                            {/*    From: "transform opacity-0 scale-95"*/}
                            {/*    To: "transform opacity-100 scale-100"*/}
                            {/*  Leaving: "transition ease-in duration-75"*/}
                            {/*    From: "transform opacity-100 scale-100"*/}
                            {/*    To: "transform opacity-0 scale-95"*/}
                            {/*-->*/}
                            {show && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">API</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Messenger</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Automation</a>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>
                </div>




            </div>
            <div className="grid grid-cols-1 mt-10">
                <DashboardCard05 />
            </div>

        </div>
    );
};

export default EmailsChart;
