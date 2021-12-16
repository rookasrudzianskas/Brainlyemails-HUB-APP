import React from 'react';
import GridViewIcon from "@mui/icons-material/GridView";

const Overview = () => {
    return (
        <div className="">
            <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                <GridViewIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className="text-gray-300"
                />
                <p className="text-md ml-2 text-gray-600 focus:text-gray-900">Overview</p>
            </div>
        </div>
    );
};

export default Overview;
