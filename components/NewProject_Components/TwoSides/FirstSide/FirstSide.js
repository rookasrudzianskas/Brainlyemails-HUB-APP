import React, {useEffect, useRef, useState} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import { HexColorPicker } from "react-colorful";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const FirstSide = () => {
    const inputFile = useRef(null);
    const [color, setColor] = useState("#b70514");
    // const [color, setColor] = useState("#aabbcc");
    const [show, setShow] = useState(false);
    console.log(`bg-[${color}]`)
    const bgColor = null;

    useEffect(() => {
        const BackgroundColor = () => {
            const bgColor = `bg-[${color}]`;
            console.log(bgColor);
            return bgColor;
        }
        BackgroundColor();
    }, [color]);


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

    return (
        <div className="bg-transparent flex flex-1 flex-col mx-10" >
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
                                    <div className={`h-9 w-9 bg-[${bgColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder={color} value={color} />
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
        </div>
    );
};

export default FirstSide;
