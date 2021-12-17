import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TodayIcon from '@mui/icons-material/Today';

const FeaturesList = () => {
    return (
        <div className="mx-3 space-y-3 mt-7">
            <div className="flex flex-row bg-gray-100 ">
                <DeleteIcon className="text-gray-400 mr-3" />
                <p className="text-gray-600">Discard draft</p>
            </div>

            <div className="flex flex-row">
                <MoreHorizIcon className="text-gray-400 mr-3" />
                <p className="text-gray-600">More options...</p>
            </div>

            <div className="flex flex-row">
                <VisibilityIcon className="text-gray-400 mr-3" />
                <p className="text-gray-600">Show email preview</p>
            </div>

            <div className="flex flex-row">
                <TodayIcon className="text-gray-400 mr-3" />
                <p className="text-gray-600">Schedule delivery</p>
            </div>
        </div>
    );
};

export default FeaturesList;
