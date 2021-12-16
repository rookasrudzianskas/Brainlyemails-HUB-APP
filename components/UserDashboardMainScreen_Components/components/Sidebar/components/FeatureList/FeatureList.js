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


            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <SendIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Messenger</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <RocketLaunchIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Automation</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <EmojiPeopleIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Contacts</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <AlternateEmailIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Forms</p>
                </div>
            </div>


            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <EmailIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Templates</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <HistoryIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">History</p>
                </div>

                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <CloudSyncIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">API</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <SettingsIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Settings</p>
                </div>
            </div>


        </div>
    );
};

export default FeatureList;
