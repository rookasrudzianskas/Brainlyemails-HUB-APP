import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import DoneIcon from "@mui/icons-material/Done";
import {useRecoilState} from "recoil";
import {chosenContentBackgroundColor} from "../../../../../../../../contentManagement/atoms/ChosenColors/ChosenColors";

const ContentBackgroundColor = () => {
    const [contentBackgroundColor, setContentBackgroundColor] = useState('#772020');
    const [show, setShow] = useState(false);
    let [bgColorContentBackgroundColor, setBgColorContentBackgroundColor] = useState("#772020");

    const [chosenContentBackgroundColorState, setChosenContentBackgroundColorState] = useRecoilState(chosenContentBackgroundColor);
    setChosenContentBackgroundColorState(contentBackgroundColor);

    const onColorButtonClickFirst = () => {
        if(show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <div>
            {/* Content background color*/}
            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Content background color</h1>
            </div>

            <div>
                {show ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgColorContentBackgroundColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={contentBackgroundColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={contentBackgroundColor} onChange={setContentBackgroundColor} />
                                <DoneIcon  onClick={onColorButtonClickFirst} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickFirst} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgColorContentBackgroundColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{contentBackgroundColor}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentBackgroundColor;
