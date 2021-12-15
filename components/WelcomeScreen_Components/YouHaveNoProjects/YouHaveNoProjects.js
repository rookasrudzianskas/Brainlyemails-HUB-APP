import React from 'react';

const YouHaveNoProjects = () => {
    return (
        <div className="">
            <div className=" bg-gray-100 h-screen">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden  bg-white flex flex-col items-center justify-center py-[7rem] space-y-2">
                                <h1 className="text-2xl font-semibold">You haven't added any email projects.</h1>
                                <h2 className="text-gray-800">Welcome, 👋. Let's get started</h2>
                                <div className="bg-black px-3 py-2 rounded-sm hover:bg-gray-800 cursor-pointer  transition duration-150 ease-in-out">
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
