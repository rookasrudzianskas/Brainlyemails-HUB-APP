import React, {useEffect} from 'react';
import Code4Times from "../../../CodeSnippets/Code4Times";
import {CODE} from "../../../../data/CodeCards/code";
import FadeIn from "react-fade-in";

const ScrollViewWithDetails2 = () => {

    useEffect(() =>  {
        // console.log(window)
    }, []);


    return (
        <div className="flex justify-center flex-col items-center max-h-xl overflow-y-scroll">
            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Brainlyemails can prefetch everything in parallel before the user clicks a link.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Public Data. User Data. Modules. Heck, even CSS.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Zero loading states. Zero skeleton UI. Zero jank.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold text-gray-500">
                       Alright, you caught us, they’re just prefetch link tags, #useThePlatform
                    </span>
                </div>
            </FadeIn>

           <div className="mb-24">


           </div>


        </div>
    );
};

export default ScrollViewWithDetails2;
