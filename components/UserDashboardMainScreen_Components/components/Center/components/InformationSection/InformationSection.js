import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CheckIcon from '@mui/icons-material/Check';

const InformationSection = () => {
    return (
        <div className="bg-white mt-5 flex items-center justify-center px-10">
            <div className="flex flex-row flex-1 ">
                <div className="flex flex-col">
                    <p  className="text-sm text-gray-400">Emails sent</p>
                    <p  className="text-xl">0</p>
                </div>

                <div className="flex flex-col items-center flex-1">
                    <p className="text-sm text-gray-400">Subscribers</p>
                    <div className="flex flex-row items-center space-x-2">
                        <p className="text-xl">1</p>
                        <ShowChartIcon style={{color: '#97EB97', fontSize: 20}} />
                        <p style={{color: '#97EB97'}} >1</p>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex flex-row">
                        <p className="text-sm text-gray-400">Bounce rate</p>
                        <div className="flex flex-row items-center px-2 rounded-full" style={{backgroundColor: '#97EB97'}}>
                            <CheckIcon style={{color: '#1B7120', fontWeight: 500, fontSize: 14}} />
                            <p style={{color: '#1B7120', fontWeight: 500, fontSize: 12}}>00.00%</p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-sm text-gray-400">Complaint rate</p>
                        <div className="flex flex-row items-center px-2 rounded-full" style={{backgroundColor: '#97EB97'}}>
                            <CheckIcon style={{color: '#1B7120', fontWeight: 500, fontSize: 14}} />
                            <p style={{color: '#1B7120', fontWeight: 500, fontSize: 12}}>00.00%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationSection;
