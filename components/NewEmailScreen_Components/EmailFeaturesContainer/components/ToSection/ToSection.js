import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ToSection = () => {
    return (
        <div className="px-10 py-2">
            <div className="flex flex-row items-center">
                <div className="flex flex-1">
                    <div>
                        <p className="text-gray-400">To:</p>
                    </div>

                    <div className="ml-[58px]">
                        <p className="text-gray-600">1 recipient</p>
                        <p className="text-gray-800 mt-4">Everyone subscribed</p>
                    </div>
                </div>

                <div className="ml-7 cursor-pointer">
                    <ExpandMoreIcon className="text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default ToSection;
