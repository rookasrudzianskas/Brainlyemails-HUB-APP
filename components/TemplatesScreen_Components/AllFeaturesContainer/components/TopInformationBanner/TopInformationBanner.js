import React from 'react';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";

const TopInformationBanner = () => {
    return (
        <div className="bg-white mt-5 py-6 px-10 border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row items-center">
                <div className="flex flex-col flex-1">
                    <div>
                        <p className="text-xl text-gray-800">Custom emails</p>
                    </div>
                    <div className="max-w-xl mt-4">
                        <p className="text-gray-500">
                            Need more control? You can send custom HTML and plain text emails via Brainlyemails API as well.
                        </p>

                        <p className="mt-5 text-indigo-500 hover:underline hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer">Learn more</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="https://blush.design/api/download?shareUri=bV10eoEgGbviyhrI&c=Accesories_0%7Eff8d83&w=800&h=800&fm=png" className="w-32 h-32 object-contain" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TopInformationBanner;
