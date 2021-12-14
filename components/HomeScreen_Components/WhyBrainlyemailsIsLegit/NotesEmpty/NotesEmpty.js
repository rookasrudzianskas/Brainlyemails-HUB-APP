import React from 'react';
import FadeIn from "react-fade-in";
import Code4Times from "../../../CodeSnippets/Code4Times";

const NotesEmpty = () => {
    return (
        <div className="">
            <div className="flex justify-center flex-col items-center max-h-xl overflow-y-scroll">
                <FadeIn>
                    <div className=" max-w-4xl p-10 pl-16 mt-32">
                    <span className="text-7xl font-bold max-h-8xl">

                    </span>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className=" max-w-4xl p-10 pl-16 mt-32">
                    <span className="text-7xl font-bold  max-h-8xl">
                    </span>
                    </div>
                </FadeIn>

                </div>
        </div>
    );
};

export default NotesEmpty;
