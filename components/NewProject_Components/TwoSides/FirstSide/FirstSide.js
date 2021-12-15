import React, {useRef, useState} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import { HexColorPicker } from "react-colorful";


const FirstSide = () => {
    const inputFile = useRef(null);
    const [color, setColor] = useState("#aabbcc");


    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const onColorButtonClickFirst = () => {

    };

    return (
        <div className="bg-transparent flex flex-1 flex-col mx-10">
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

            <div onClick={onColorButtonClickFirst} className="flex flex-row mt-5 bg-gray-200 py-[10px] rounded-sm items-center border border-gray-400 border-1 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out">
                <div className="">
                    <div className="h-7 w-7 bg-red-500 rounded-full mx-3 p-1 border border-2 rounded-full border-white border-opacity-100"/>
                </div>
                <p className="text-gray-800 text-sm" >{color}</p>

                {/*<HexColorPicker color={color} onChange={setColor} />*/}

            </div>
        </div>
    );
};

export default FirstSide;
