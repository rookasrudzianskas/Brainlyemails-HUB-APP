import React from 'react';
import Feature from "../Feature";
import GridViewIcon from '@mui/icons-material/GridView';
import SendIcon from '@mui/icons-material/Send';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import HistoryIcon from '@mui/icons-material/History';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SettingsIcon from '@mui/icons-material/Settings';

const FeatureList = () => {
    return (
        <div className="">
            <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                <GridViewIcon />
                <p className="text-md ml-2">Overview</p>
            </div>

            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <SendIcon />
                    <p className="text-md ml-2">Messenger</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <RocketLaunchIcon />
                    <p className="text-md ml-2">Automation</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <EmojiPeopleIcon />
                    <p className="text-md ml-2">Contacts</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <AlternateEmailIcon />
                    <p className="text-md ml-2">Forms</p>
                </div>
            </div>


            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <EmailIcon />
                    <p className="text-md ml-2">Templates</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <HistoryIcon />
                    <p className="text-md ml-2">History</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <CloudSyncIcon />
                    <p className="text-md ml-2">API</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <SettingsIcon />
                    <p className="text-md ml-2">Settings</p>
                </div>
            </div>


        </div>
    );
};

export default FeatureList;
