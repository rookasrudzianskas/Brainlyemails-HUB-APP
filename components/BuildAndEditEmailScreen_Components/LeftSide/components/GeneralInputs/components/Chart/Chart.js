import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';

const Chart = () => {
    return (
        <div className="px-6 py-3 flex flex-row space-x-2 text-indigo-200 hover:bg-indigo-200 hover:text-indigo-500 cursor-pointer transition duration-150 ease-in-out">
            <BarChartIcon />
            <p>Chart</p>
        </div>
    );
};

export default Chart;
