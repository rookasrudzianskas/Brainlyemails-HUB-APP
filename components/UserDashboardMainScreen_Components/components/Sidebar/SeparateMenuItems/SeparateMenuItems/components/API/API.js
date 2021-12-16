import React from 'react';
import CloudSyncIcon from "@mui/icons-material/CloudSync";

const API = () => {
    return (
        <div className="">
            <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                <CloudSyncIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className="text-gray-300"
                />
                <p className="text-md ml-2  text-gray-600">API</p>
            </div>
        </div>
    );
};

export default API;
