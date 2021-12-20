import React from 'react';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CheckIcon from "@mui/icons-material/Check";

const TopInformationBanner = () => {
    return (
        <div className="bg-white mt-5 py-6 px-10 border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row items-center">
                <div className="flex flex-col flex-1">
                    <div>
                        <p className="text-xl text-gray-800">Subscribe forms</p>
                    </div>
                    <div className="max-w-xl mt-4">
                        <p className="text-gray-500">
                            Build your mailing list without a hassle. Create subscribe form and share the URL on your blog posts, for example.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="https://blush.design/api/download?shareUri=vPq0nbQplmTIG6si&c=Accesories_0%7Ea8a3ec&w=800&h=800&fm=png" className="w-32 h-32 object-contain" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default TopInformationBanner;
