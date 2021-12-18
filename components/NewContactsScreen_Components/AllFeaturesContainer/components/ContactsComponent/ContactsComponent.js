import React from 'react';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SearchIcon from '@mui/icons-material/Search';

const ContactsComponent = () => {
    return (
        <div className="bg-white mt-5 py-6  border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row items-center w-full">
                <div className="flex bg-transparent flex-1 w-full">
                    <div className="px-10 flex w-full">
                        <div className=" flex flex-1 items-center">
                            <SearchIcon
                                className="text-indigo-500"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex flex-1 h-[9px] rounded-sm"
                                style={{border: 0, outline: 0}}
                            />
                            <SettingsApplicationsIcon
                                className="text-2xl text-indigo-500"
                                style={{fontSize: 38}}
                            />
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
