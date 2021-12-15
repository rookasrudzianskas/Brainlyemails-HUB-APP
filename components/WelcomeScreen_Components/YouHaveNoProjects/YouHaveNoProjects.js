import React from 'react';

const YouHaveNoProjects = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="py-8">
                        <div className="flex flex-row items-center  mt-[2rem]">
                            <div className="flex flex-col flex-1">
                                <h1 className="text-gray-900">Campaigns</h1>
                                <h1 className="font-semibold text-3xl text-gray-900">My Emails Campaigns</h1>
                            </div>
                            <div className="bg-indigo-500 flex max-w-1 max-h-10 flex items-center px-4 py-3 justify-center rounded-sm  hover:bg-indigo-400 cursor-pointer  transition duration-150 ease-in-out">
                                <p className="text-white font-semibold">+ Add Email</p>
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col items-center justify-center py-[7rem] space-y-2">
                                <h1 className="text-2xl font-semibold text-gray-900">You haven't added any email projects.</h1>
                                <h2 className="text-gray-800">Welcome, 👋. Let's get started</h2>
                                <div className="bg-indigo-500 px-3 py-2 rounded-sm hover:bg-indigo-400 cursor-pointer  transition duration-150 ease-in-out">
                                    <p className="text-white font-semibold"> Add Your First Email Beast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouHaveNoProjects;
