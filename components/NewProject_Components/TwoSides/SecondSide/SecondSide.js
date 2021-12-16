import React from 'react';
import {bodyBackgroundColor} from "../../../../contentManagement/atoms/ChosenColors/ChosenColors";
import {useRecoilState, useRecoilValue} from "recoil";

const SecondSide = () => {

    // coloring the email 🔥
    // 👇 the background state is set to the background color of the chosen color
    const [chosenBodyBackgroundColor, setChosenBodyBackgroundColor] = useRecoilState(bodyBackgroundColor);
    console.log(`bg-[${chosenBodyBackgroundColor}]`);

    return (
        <div className={`bg-[#651217] flex justify-center w-[45rem] flex-col items-center`}>
            <div className="mb-8">
                <p className="text-2xl text-gray-800 hover:cursor-pointer">Company</p>
            </div>

            <div className="w-[39rem] h-[23rem] bg-white flex justify-center py-10 overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col max-w-lg">
                    <div>
                        <h1 className="text-2xl text-gray-800">Hello!</h1>
                    </div>
                    <div className="mt-6 hover:cursor-pointer">
                        <p className="text-gray-700">This is just an example email illustrating to you how your emails will look in users' inboxes.
                            Brainlyemails gives you access to a variety of pre-made email templates that are already typed
                            out and ready to be sent.
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mt-5 bg-indigo-500 max-w-[13rem] py-3 px-4 rounded-sm hover:bg-indigo-400 cursor-pointer transition duration-150 ease-in-out">
                            <p className="text-gray-100 font-semibold">Look at this button!</p>
                        </div>
                    </div>

                    <div className="mt-6 hover:cursor-pointer">
                        <p className="text-gray-500 text-sm">This is the part of an email where you can tell your users about minor things.
                            For example, if they didn't request a password change, they can safely ignore the message.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondSide;
