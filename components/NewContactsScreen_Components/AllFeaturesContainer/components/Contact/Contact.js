import React from 'react';

const Contact = () => {
    return (
        <div className="">
            <div className="flex flex-row items-center px-5 py-2 rounded-sm hover:bg-indigo-100 cursor-pointer transition duration-150 ease-in-out">
                <div className="flex flex-col flex-1">
                    <p className="flex font-bold text-gray-800">
                        Rokas
                    </p>
                    <p className=" text-gray-800">
                        rokas@byrookas.com
                    </p>
                </div>

                <div className="flex bg-indigo-500 rounded-full px-2 hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                    <p className="text-xs text-gray-100 font-semibold">
                        NEW
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
