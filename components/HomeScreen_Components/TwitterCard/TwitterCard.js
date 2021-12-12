import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';


const TwitterCard = ({user}) => {
    return (
        <div className="max-w-xl bg-gray-900 w-[450px] h-64 rounded-lg mx-3 hover:opacity-90 cursor-pointer transition duration-150 ease-in-out ">
        {/*    make twitter card */}
            <div className="">
                <div className="flex flex-1 items-center pr-8 pl-8 pt-8">
                    <div className="flex flex-row items-center flex-1">
                        <img src={user?.image} className="w-10 h-10 mr-4 rounded-full object-cover" alt=""/>
                        <div>
                            <h1 className="font-bold">@{user?.company}</h1>
                            <p>{user?.name}</p>
                        </div>
                    </div>
                    <div  className="bg-white inline-block h-6 w-6 rounded-full ring-2 ring-white flex items-center justify-center flex">
                        <TwitterIcon className="text-black text-xs" />
                    </div>
                </div>

                <div className="mt-5 px-8">
                    <span className="text-lg text-gray-400">holy 💩 Brainlyemails is good</span>
                </div>
            </div>
        </div>
    );
};

export default TwitterCard;
