import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import DoneIcon from "@mui/icons-material/Done";

const ShowAllColors = () => {
    const [contentBackgroundColor, setContentBackgroundColor] = useState('#ffffff');
    const [contentBorderColor, setContentBorderColor] = useState('#ffffff');
    const [buttonTextColor, setButtonTextColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#ffffff');
    const [titleTextColor, setTitleTextColor] = useState('#ffffff');
    const [mutedTextColor, setMutedTextColor] = useState('#ffffff');
    const [footerTextColor, setFooterTextColor] = useState('#ffffff');

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    let [bgColorContentBackgroundColor, setBgColorContentBackgroundColor] = useState("#ffffff");
    let [bgContentBorderColor, setBgContentBorderColor] = useState("#ffffff");
    let [bgButtonTextColor, setBgButtonTextColor] = useState("#ffffff");
    let [bgTextColor, setBgTextColor] = useState("#ffffff");
    let [bgTitleTextColor, setBgTitleTextColor] = useState("#ffffff");
    let [bgMutedTextColor, setBgMutedTextColor] = useState("#ffffff");
    let [bgFooterTextColor, setBgFooterTextColor] = useState("#ffffff");


    const onColorButtonClickFirst = () => {
        if(show === false) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const onColorButtonClickSecond = () => {
        if(show2 === false) {
            setShow2(true);
        } else {
            setShow2(false);
        }
    }

    const onColorButtonClickThird = () => {
        if(show3 === false) {
            setShow3(true);
        } else {
            setShow3(false);
        }
    }

    const onColorButtonClickFourth = () => {
        if(show4 === false) {
            setShow4(true);
        } else {
            setShow4(false);
        }
    }

    const onColorButtonClickFifth = () => {
        if(show5 === false) {
            setShow5(true);
        } else {
            setShow5(false);
        }
    }

    const onColorButtonClickSixth = () => {
        if(show6 === false) {
            setShow6(true);
        } else {
            setShow6(false);
        }
    }

    const onColorButtonClickSeventh = () => {
        if(show7 === false) {
            setShow7(true);
        } else {
            setShow7(false);
        }
    }



    return (
        <div className="">

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

            {/*Content border color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Content border color</h1>
            </div>

            <div>
                {show2 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgContentBorderColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={contentBorderColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={contentBorderColor} onChange={setContentBorderColor} />
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
                            <div className={`h-7 w-7 bg-[${bgContentBorderColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{contentBorderColor}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>

            {/*Button text color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Button text color</h1>
            </div>

            <div>
                {show3 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgButtonTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={buttonTextColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={buttonTextColor} onChange={setButtonTextColor} />
                                <DoneIcon  onClick={onColorButtonClickThird} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickThird} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgButtonTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{buttonTextColor}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>

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
                                    <div className={`h-9 w-9 ${bgTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
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
                            <div className={`h-7 w-7 bg-[${bgTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
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

            {/*Title text color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Title text color</h1>
            </div>

            <div>
                {show5 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgTitleTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={titleTextColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={titleTextColor} onChange={setTitleTextColor} />
                                <DoneIcon  onClick={onColorButtonClickFifth} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickFifth} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgTitleTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{titleTextColor}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>


            {/*Muted text color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Muted text color</h1>
            </div>

            <div>
                {show6 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgMutedTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={mutedTextColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={mutedTextColor} onChange={setMutedTextColor} />
                                <DoneIcon  onClick={onColorButtonClickSixth} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickSixth} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgMutedTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{mutedTextColor}</p>

                        {/*{show ? (*/}
                        {/*) : (*/}
                        {/*    <div>*/}

                        {/*    </div>*/}
                        {/*)}*/}

                    </div>
                )}
            </div>

            {/*Footer text color*/}

            <div className="mt-5">
                <h1 className="text-sm font-bold text-indigo-500">Footer text color</h1>
            </div>

            <div>
                {show7 ? (
                    <div
                        // onClick={onColorButtonClickFirst}
                        className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover: cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className="mb-4 flex flex-row mt-3">
                                <div className="">
                                    <div className={`h-9 w-9 ${bgFooterTextColor} rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                                </div>
                                <input
                                    className="shadow appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" value={footerTextColor} />
                            </div>
                            <div className="ml-[60px] flex flex-row">
                                <HexColorPicker className="w-[10rem] h-[10rem]" color={footerTextColor} onChange={setFooterTextColor} />
                                <DoneIcon  onClick={onColorButtonClickSeventh} className="text-gray-400 ml-[35px] bg-white rounded-full hover:text-gray-500 cursor-pointer transition duration-150 ease-in-out" />
                            </div>


                            {/*<div className="text-right" onClick={onColorButtonClickFirst}>*/}
                            {/*    <p className="text-sm font-bold text-indigo-500  mt-3 hover:underline transition duration-150 ease-in-out">I am happy with my color 🚀</p>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                ): (
                    <div onClick={onColorButtonClickSeventh} className={`flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out`}>
                        <div className="">
                            <div className={`h-7 w-7 bg-[${bgFooterTextColor}] rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100`}/>
                        </div>
                        <p className="text-gray-800 text-sm" >{footerTextColor}</p>

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

export default ShowAllColors;
