import React from 'react';
import FadeIn from "react-fade-in";
import Code4Times from "../../../CodeSnippets/Code4Times";

const NotesAboutIt = () => {
    return (
        <div className="">
            <div className="flex justify-center flex-col items-center max-h-xl overflow-y-scroll">
                <FadeIn>
                    <div className=" max-w-4xl p-10 pl-16 mt-32">
                    <span className="text-7xl font-bold">
                        Most web apps fetch inside of components, creating <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-400 cursor-pointer">request waterfalls</span>, slower loads, and <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-400 cursor-pointer">jank.</span>
                    </span>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className=" max-w-4xl p-10 pl-16 mt-32">
                    <span className="text-7xl font-bold">
                        Brainlyemails loads data in parallel on the server and sends a fully formed HTML email. <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-pink-400 cursor-pointer">Way faster, jank free.</span>
                    </span>
                    </div>
                </FadeIn>

                </div>
        </div>
    );
};

export default NotesAboutIt;
