import React, {useState} from 'react';
import {HexColorPicker} from "react-colorful";
import DoneIcon from "@mui/icons-material/Done";
import ContentBackgroundColor from "./components/ContentBackgroundColor/ContentBackgroundColor";

const ShowAllColors = () => {
    const [textColor, setTextColor] = useState('#ffffff');
    const [titleTextColor, setTitleTextColor] = useState('#ffffff');
    const [mutedTextColor, setMutedTextColor] = useState('#ffffff');
    const [footerTextColor, setFooterTextColor] = useState('#ffffff');

    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    let [bgTextColor, setBgTextColor] = useState("#ffffff");
    let [bgTitleTextColor, setBgTitleTextColor] = useState("#ffffff");
    let [bgMutedTextColor, setBgMutedTextColor] = useState("#ffffff");
    let [bgFooterTextColor, setBgFooterTextColor] = useState("#ffffff");






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

            <ContentBackgroundColor />



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
