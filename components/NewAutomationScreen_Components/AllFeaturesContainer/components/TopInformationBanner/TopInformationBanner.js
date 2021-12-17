import React from 'react';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";

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
                            Let your users know about what you're working on – send newsletters, product updates, and follow‑ups.
                            Send branded messages with your logo, simple messages without any layout or pick from your templates.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="https://blush.design/api/download?shareUri=A0R3cDdGSlW_tDfP&c=Accesories_0%7Ebbdb98&w=800&h=800&fm=png" className="w-32 h-32 object-contain" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TopInformationBanner;
