import React, {useEffect, useState} from 'react';
import {
    bodyBackgroundColor, chosenButtonTextColor,
    chosenContentBackgroundColor, chosenContentBorderColor, chosenMutedTextColor, chosenTextColor, chosenTitleTextColor,
    highlightColor
} from "../../../../contentManagement/atoms/ChosenColors/ChosenColors";
import {useRecoilState, useRecoilValue} from "recoil";
import {projectName} from "../../../../contentManagement/atoms/ProjectName/ProjectName";

const SecondSide = () => {

    // coloring the email 🔥
    // 👇 the background state is set to the background color of the chosen color
    const [chosenBodyBackgroundColor, setChosenBodyBackgroundColor] = useRecoilState(bodyBackgroundColor);
    // 👇 this is the button background color
    const [chosenHighlightColor, setChosenHighlightColor] = useRecoilState(highlightColor);
    // 👇 this is the content background color
    const [chosenContentBackgroundColorState, setChosenContentBackgroundColorState] = useRecoilState(chosenContentBackgroundColor);
    // 👇 content border color
    const [chosenContentColorState, setChosenContentColorState] = useRecoilState(chosenContentBorderColor);
    // 👇 button text color
    const [chosenButtonTextColorState, setChosenButtonTextColorState] = useRecoilState(chosenButtonTextColor);
    // 👇 front text color state
    const [chosenTextColorState, setChosenTextColorState] = useRecoilState(chosenTextColor);
    // console.log('🚀 this is text color state', chosenTextColorState);
    // 👇 this is for title color
    const [chosenTitleColorState, setChosenTitleColorState] = useRecoilState(chosenTitleTextColor);
    // 👇 this is for the bottom text element, muted text
    const [chosenMutedTextColorState, setChosenMutedTextColorState] = useRecoilState(chosenMutedTextColor);
    // 👇 this is for the bottom footer element
    const [chosenFooterTextColorState, setChosenFooterTextColorState] = useRecoilState(chosenMutedTextColor);
    // 👇 with this we get the project name from the data store
    const [projectNameState, setNewProjectNameState] = useRecoilState(projectName);

    return (
        <div className={`flex justify-center w-[45rem] flex-col items-center`} style={{backgroundColor: chosenBodyBackgroundColor}}>
            <div className="mb-8">
                <p className="text-2xl text-gray-800 hover:cursor-pointer">{projectNameState ? projectNameState : 'Company'}</p>
            </div>

            <div className="w-[39rem] h-[23rem] border border-1 border-white bg-white flex rounded-sm justify-center py-10 overflow-y-scroll scrollbar-hide" style={{backgroundColor: chosenContentBackgroundColorState, borderColor: chosenContentColorState}}>
                <div className="flex flex-col max-w-lg">
                    <div>
                        <h1 className="text-2xl text-gray-800" style={{color: chosenTitleColorState}}>Hello!</h1>
                    </div>
                    <div className="mt-6 hover:cursor-pointer">
                        <p className="text-gray-700" style={{color: chosenTextColorState}}>This is just an example email illustrating to you how your emails will look in users' inboxes.
                            Brainlyemails gives you access to a variety of pre-made email templates that are already typed
                            out and ready to be sent.
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mt-5 bg-indigo-500 max-w-[13rem] py-3 px-4 rounded-sm hover:opacity-80 cursor-pointer transition duration-150 ease-in-out" style={{backgroundColor: chosenHighlightColor}}>
                            <p className="text-gray-100 font-semibold" style={{color: chosenButtonTextColorState}}>Look at this button!</p>
                        </div>
                    </div>

                    <div className="mt-6 hover:cursor-pointer">
                        <p className="text-gray-500 text-sm" style={{color: chosenMutedTextColorState}}>This is the part of an email where you can tell your users about minor things.
                            For example, if they didn't request a password change, they can safely ignore the message.

                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondSide;
