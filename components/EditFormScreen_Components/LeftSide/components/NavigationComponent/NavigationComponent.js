import React from 'react';
import {ArrowBack} from "@mui/icons-material";
import {useRouter} from "next/router";

const NavigationComponent = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row space-x-3 justify-center mt-8 ml-2">
            <div className="flex space-x-3">
                <div
                    onClick={() => router.back()}
                    className="flex flex-row justify-center h-10 px-2 rounded-sm items-center justify-center space-x-2 hover:bg-indigo-200 transition duration-150 ease-in-out cursor-pointer">
                    <ArrowBack className="text-indigo-500 text-md" />
                    <p className="text-gray-800">Go back</p>
                </div>
                <div className="flex flex-col bg-indigo-500 h-10 px-2 rounded-sm items-center justify-center hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                    <p className="text-gray-100 font-semibold">Save changes</p>
                </div>
            </div>
            <div className="flex space-x-3 flex-1"/>
        </div>
    );
};

export default NavigationComponent;
