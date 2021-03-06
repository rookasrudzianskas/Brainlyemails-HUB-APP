import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

const ThatIsEnoughScreen = () => {

    const {data: session} = useSession();
    const router = useRouter();

    return (
        <div className="h-screen w-screen bg-black flex flex-col">
                <div className="flex flex-col flex-1  items-center justify-center">
                    <div className="flex flex-col">
                        <div className="max-w-6xl cursor-pointer">
                            <h1 className="text-8xl font-bold text-white">That's probably enough for now. <span className=" text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-400 cursor-pointer ">
                                        What are you waiting for?
                                   </span></h1>
                        </div>

                        <div className="bg-blue-500 max-w-[8rem] py-4 flex items-center justify-center font-bold rounded-sm mt-10 hover:bg-blue-400 transition duration-150 ease-in-out cursor-pointer"
                             // onClick={session ? router.push('/dashboard') : router.push('/auth/signin')}
                        >Go Play!</div>
                    </div>
                </div>


                <div className="flex flex-row bg-black items-center  px-10">
                        <div className="flex flex-1 hover:cursor-pointer">
                            <img src="https://www.brainlyemails.com/images/img_14.png"  className="object-contain h-32 w-44" alt=""/>
                        </div>
                        <div className="flex flex-row space-x-[1.2rem]">
                            <div className="bg-white inline-block h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center hover:cursor-pointer">
                                    <GitHubIcon className="text-black" />
                            </div>
                            <div className="bg-white inline-block h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center hover:cursor-pointer">
                                <TwitterIcon className="text-black" />
                            </div>
                            <div className="bg-white inline-block h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center hover:cursor-pointer">
                                <YouTubeIcon className="text-black" />
                            </div>
                        </div>
                </div>

        </div>
    );
};

export default ThatIsEnoughScreen;
