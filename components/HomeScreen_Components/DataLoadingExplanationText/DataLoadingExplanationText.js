import React from 'react';

const DataLoadingExplanationText = () => {
    return (
        <div className="p-10 flex items-center justify-center mt-28">
            <div className=" max-w-4xl p-10">
                <span className="cursor-pointer  text-7xl font-bold">
                    Data loading ... 😅
                    <div>
                        You ever notice most of the code in your email is for
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-400 cursor-pointer mx-2">changing data?</span>
                    </div>
                </span>

                <div>

                    <span className="text-xl font-normal text-gray-300">
                        <div className="mt-3">
                             Imagine if React only had props and no way to set state. What’s the point? If a web framework helps you load data but doesn’t help you update it, what’s the point? Brainlyemails doesn’t drop you off at the {" <form"} onSubmit> cliff.
                          <span className="text-gray-500"> (What the heck does event.preventDefault do anyway?)</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DataLoadingExplanationText;
