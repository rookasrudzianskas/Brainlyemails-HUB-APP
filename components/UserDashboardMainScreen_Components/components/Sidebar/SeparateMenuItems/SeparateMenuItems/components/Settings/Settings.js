import React from 'react';
import SettingsIcon from "@mui/icons-material/Settings";

const Settings = () => {
    return (
        <div>
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

export default Settings;
