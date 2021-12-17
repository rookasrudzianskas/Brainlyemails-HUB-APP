import React from 'react';
import CodeIcon from "@mui/icons-material/Code";

const TriggerComponent = () => {
    return (
        <div className="flex flex-row space-x-2">
            <div className="flex items-center px-2 flex-1 bg-gray-100 py-2 border-[1px] border-indigo-200 rounded-sm hover:bg-indigo-200 border-indigo-300 transition duration-150 ease-in-out cursor-pointer">
                <p className="flex flex-1 text-gray-800">name</p>
                <CodeIcon className="rotate-90 text-sm" />
            </div>
            <div className="flex items-center px-2 flex-1 bg-gray-100 py-2 border-[1px] border-indigo-200 rounded-sm hover:bg-indigo-200 border-indigo-300 transition duration-150 ease-in-out cursor-pointer">
                <p className="flex flex-1 text-gray-800">equals</p>
                <CodeIcon className="rotate-90 text-sm" />
            </div>
            <div className="flex items-center flex-1 bg-gray-100 border-[1px] border-indigo-200 rounded-sm hover:bg-indigo-200 border-indigo-300 transition duration-150 ease-in-out cursor-pointer">
                <input className="flex flex-1  px-2 text-gray-800 appearance-none outline-none bg-gray-100 py-2 placeholder:gray-800" placeholder={'Type value'}/>
            </div>
        </div>
    );
};

export default TriggerComponent;
