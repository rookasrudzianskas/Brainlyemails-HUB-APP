import React, {useEffect} from 'react';
import Code4Times from "../../../CodeSnippets/Code4Times";
import {CODE} from "../../../../data/CodeCards/code";
import FadeIn from "react-fade-in";

const ScrollViewWithDetails3 = () => {

    useEffect(() =>  {
        // console.log(window)
    }, []);


    return (
        <div className="flex justify-center flex-col items-center max-h-xl overflow-y-scroll space-y-[10rem]">
            <FadeIn>
                <div className=" max-w-6xl p-10 pl-16">
                    <span className="text-8xl font-bold">
                       Route Error Boundaries <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-400 cursor-pointer ">keep the happy path happy.</span>
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Each route module can export an error boundary next to the default route component.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        If an error is thrown, client or server side, users see the boundary instead of the default component.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                       Routes w/o trouble render normally, so users have more options than slamming refresh.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                       If a route has no boundary, errors bubble up. Just put one at the top and chill out about errors in code review, yeah?
                    </span>
                </div>
            </FadeIn>

           <div className="mb-24">


           </div>


        </div>
    );
};

export default ScrollViewWithDetails3;
