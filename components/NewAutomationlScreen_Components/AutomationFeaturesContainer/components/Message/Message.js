import React from 'react';

const Message = () => {
    return (
        <div className="mx-10 bg-indigo-200 w-full">
            <div className="flex flex-row items-center space-x-10">
                <div className="flex bg-indigo-300 px-7">
                    <p>#1</p>
                </div>

                <div className="flex-row flex-1">
                    <div className="flex flex-col">
                        <p>From:</p>
                        <p>Subject:</p>
                    </div>

                    {/*<div className="flex">*/}
                    {/*    Rokas*/}
                    {/*</div>*/}

                    {/*<div className="flex">*/}
                    {/*    Rokas*/}
                    {/*</div>*/}
                </div>

                <div className="flex px-7">
                    <p>Options...</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
