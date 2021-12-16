import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import DoneIcon from "@mui/icons-material/Done";
import {useRecoilState} from "recoil";
import {
    chosenTextColor,
} from "../../../../../../../../contentManagement/atoms/ChosenColors/ChosenColors";

const TextColor = () => {
    const [textColor, setTextColor] = useState('#64748B');
    const [show4, setShow4] = useState(false);
    let [bgTextColor, setBgTextColor] = useState("#de983d");

    const [chosenTextColorState, setChosenTextColorState] = useRecoilState(chosenTextColor);
    setChosenTextColorState(textColor);
    // console.log('>>>>>>>', textColor);

    const onColorButtonClickFourth = () => {
        if(show4 === false) {
            setShow4(true);
        } else {
            setShow4(false);
        }
    }
    return (
        <div>

            {/*Text color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Text color</h1>
            </div>

            <div>
                {show4 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`} style={{backgroundColor: textColor}}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={textColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={textColor} onChange={setTextColor} />
                                <DoneIcon  onClick={onColorButtonClickFourth} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickFourth} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}  style={{backgroundColor: textColor}}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{textColor}</p>

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

export default TextColor;
