import React, {useEffect, useRef, useState} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import { HexColorPicker } from "react-colorful";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ShowAllColors from "./components/ShowAllColors";

const FirstSide = () => {
    const inputFile = useRef(null);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [color, setColor] = useState("#b70514");
    const [color2, setColor2] = useState("#b70514");
    const [showAllColors, setShowAllColors] = useState(false);
    // const [color, setColor] = useState("#aabbcc");

    let [bgColor, setBgColor] = useState("#b70514");
    let [bgColor2, setBgColor2] = useState("#b70514");

    useEffect(() => {
        const BackgroundColor = () => {
            setBgColor = `bg-[${color}]`;
            return bgColor;
        }
        BackgroundColor();
    }, [color]);

    useEffect(() => {
        const BackgroundColor2 = () => {
            setBgColor2 = `bg-[${color2}]`;
            return bgColor2;
        }
        BackgroundColor2();
    }, [color2]);

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const onColorButtonClickFirst = () => {
        if(show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const onColorButtonClickSecond = () => {
        if(show2 === false) {
            setShow2(true);
        } else {
            setShow2(false);
        }
    };

    const handleShow = () => {
        if(showAllColors === false) {
            setShowAllColors(true);
        } else {
            setShowAllColors(false);
        }
    }

    return (
        <div className="bg-transparent flex flex-1 flex-col mx-10 max-h-[35rem] overflow-y-scroll scrollbar-hide" >
            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Logo</h1>
            </div>

            <div className="mt-2">
                <h1 className="text-sm text-gray-300">Max size 400 kb.</h1>
            </div>


            <div onClick={onButtonClick} className="flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out">
               <UploadIcon className="ml-2 mr-1 text-gray-800" />
                <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                <p className="text-gray-800 text-sm" >Upload image</p>
            </div>

            <div className="border-b border-1 border-gray-100 mt-6"/>

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Body background color</h1>
            </div>

            <div>
                {show ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                          className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={color} />
                            </div>
                                <div className="ml-[60px] flex flex-row">
                                    <HexColorPicker className="w-[10rem] h-[10rem]" color={color} onChange={setColor} />
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
                            <div className={`h-7 w-7 bg-[${bgColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{color}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>


            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Highlight color</h1>
            </div>

            <div>
                {show2 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgColor2} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={color2} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={color2} onChange={setColor2} />
                                <DoneIcon  onClick={onColorButtonClickSecond} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickSecond} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgColor2}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{color2}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>

            <div className={`${!showAllColors ? 'mt-5' : ''}`} onClick={handleShow}>
                {!showAllColors && (
                    <p className="text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition duration-150 ease-in-out">Show all colors</p>
                )}
            </div>

            {showAllColors && (
                <div>
                    <ShowAllColors />

                    <div className={`${showAllColors ? 'mt-5' : ''}`} onClick={handleShow}>
                        {showAllColors && (
                            <p className="text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition duration-150 ease-in-out">Hide all colors</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default FirstSide;
