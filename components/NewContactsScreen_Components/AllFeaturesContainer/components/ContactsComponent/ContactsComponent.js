import React from 'react';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SearchIcon from '@mui/icons-material/Search';
import SubscribedAndUnsubscribed from "../SubscribedAndUnsubscribed";
import ContactsList from "../ContactsList";

const ContactsComponent = () => {
    return (
        <div className="bg-white mt-5 py-6 bg-white border border-1 border-indigo-500 rounded-sm">
            <div className="flex flex-row w-full">
                <div className="flex  bg-white flex-1 w-full">
                    <div className=" flex flex-col w-full">
                       <div className="flex w-full flex-col border-b-[1px] border-indigo-500 border-r-4 border-indigo-500 px-10">
                           <div className=" flex flex-1 items-center bg-white border border-indigo-500 rounded-sm justify-center px-2">
                               <SearchIcon
                                   className="text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer"
                               />
                               <input
                                   type="text"
                                   placeholder="Search"
                                   className="flex flex-1 h-[10px] rounded-sm text-gray-500"
                                   style={{border: 0, outline: 0}}
                               />
                               <SettingsApplicationsIcon
                                   className="text-2xl text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out cursor-pointer"
                                   style={{fontSize: 30}}
                               />
                           </div>

                           <div className="flex flex-row space-x-2 mb-8">
                               <SubscribedAndUnsubscribed/>
                           </div>
                       </div>


                        <div className="mt-10 border-b-[1px] border-indigo-500 mb-10">
                            <ContactsList />
                        </div>

                        <div>
                            <div className="flex items-center justify-center py-0 lg:px-0 sm:px-1 px-4">
                                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                                    </div>
                                    <div className="sm:flex hidden">
                                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                                        <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                                    </div>
                                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-96">
                    <div className="border-b-[4px] border-indigo-500">
                        <p className="text-xl text-gray-800 hover:cursor-pointer">Groups</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsComponent;
