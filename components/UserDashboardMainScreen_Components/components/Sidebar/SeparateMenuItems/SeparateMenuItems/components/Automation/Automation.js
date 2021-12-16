import React from 'react';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Automation = () => {
    return (
        <div className="">
            <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                <RocketLaunchIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className="text-gray-300"
                />
                <p className="text-md ml-2  text-gray-600">Automation</p>
            </div>
        </div>
    );
};

export default Automation;
