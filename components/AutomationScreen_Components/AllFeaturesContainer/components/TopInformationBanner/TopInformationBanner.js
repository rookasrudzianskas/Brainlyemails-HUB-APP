import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TopInformationBanner = () => {
    return (
        <div className="bg-white mt-5 py-6 px-10 border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row items-center">
                <div className="flex flex-col flex-1">
                    <div>
                        <p className="text-xl text-gray-800">Set up onboarding sequence</p>
                    </div>
                    <div className="max-w-xl mt-4">
                        <p className="text-gray-500">
                            Learn how to set up an onboarding sequence for SaaS. The goal is to convert trial users to paid customers.
                            This is a common use-case, and it's easy to set up with Brainlyemails.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <p className="text-xs text-indigo-500 mb-3">
                            30 MINUTES INTEGRATION
                        </p>

                        <div className="flex flex-row">
                            <p className="text-indigo-500 mr-2 hover:text-indigo-400 hover:underline transition duration-150 ease-in-out cursor-pointer">Step-by-step guide</p>
                            <ArrowForwardIcon className="text-indigo-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopInformationBanner;
