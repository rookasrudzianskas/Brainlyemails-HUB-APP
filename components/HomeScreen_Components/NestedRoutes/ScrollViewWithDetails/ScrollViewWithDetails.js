import React, {useEffect} from 'react';
import Code4Times from "../../../CodeSnippets/Code4Times";
import {CODE} from "../../../../data/CodeCards/code";
import FadeIn from "react-fade-in";

const ScrollViewWithDetails = () => {

    useEffect(() =>  {
        // console.log(window)
    }, []);


    return (
        <div className="flex justify-center flex-col items-center max-h-xl overflow-y-scroll">
            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Emails usually have levels of navigation that control child views.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Not only are these components pretty much always coupled to URL segments...
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        ...they’re also the semantic boundary of data loading and code splitting.
                    </span>
                </div>
            </FadeIn>

            <FadeIn>
                <div className=" max-w-4xl p-10 pl-16">
                    <span className="text-7xl font-bold">
                        Hover or tap the buttons to see how they’re all related
                    </span>
                </div>
            </FadeIn>

            <div className="mt-56 flex flex-col items-center">
                <p className="text-7xl animate-bounce cursor-pointer">👇</p>
                <div className="flex flew-row mt-2">
                    {/*{CODE.map((codes, index) => <Code4Times key={index} codes={codes}/>)}*/}
                    <Code4Times />
                </div>
            </div>

           <div className="mb-24">


           </div>


        </div>
    );
};

export default ScrollViewWithDetails;
