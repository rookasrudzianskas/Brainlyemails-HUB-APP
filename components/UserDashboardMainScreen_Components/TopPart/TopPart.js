import React from 'react';
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

const TopPart = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row flex-1 mt-16">
                            <h1 className="text-xl text-gray-800">name</h1>
                        </div>
                    </div>
                    <div className="py-8 flex space-x-5">
                        <Sidebar />
                        <Center />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPart;
