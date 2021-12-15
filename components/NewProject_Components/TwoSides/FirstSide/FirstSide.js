import React, {useRef} from 'react';
import UploadIcon from '@mui/icons-material/Upload';

const FirstSide = () => {
    const inputFile = useRef(null);

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
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
        </div>
    );
};

export default FirstSide;
