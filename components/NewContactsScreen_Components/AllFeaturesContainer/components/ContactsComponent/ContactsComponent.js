import React from 'react';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SearchIcon from '@mui/icons-material/Search';
import SubscribedAndUnsubscribed from "../SubscribedAndUnsubscribed";

const ContactsComponent = () => {
    return (
        <div className="bg-white mt-5 py-6 bg-indigo-100 border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row items-center w-full">
                <div className="flex  bg-indigo-100 flex-1 w-full">
                    <div className="px-10 flex flex-col w-full">
                        <div className=" flex flex-1 items-center bg-white border border-indigo-500 rounded-sm justify-center px-2">
                            <SearchIcon
                                className="text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex flex-1 h-[9px] rounded-sm text-gray-500"
                                style={{border: 0, outline: 0}}
                            />
                            <SettingsApplicationsIcon
                                className="text-2xl text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer"
                                style={{fontSize: 30}}
                            />
                        </div>

                        <div className="flex flex-row space-x-2">
                            <SubscribedAndUnsubscribed/>
                        </div>

                    </div>
                </div>

                <div className="flex bg-blue-500 w-96">
                    Rokas
                </div>
            </div>
        </div>
    );
};

export default ContactsComponent;
