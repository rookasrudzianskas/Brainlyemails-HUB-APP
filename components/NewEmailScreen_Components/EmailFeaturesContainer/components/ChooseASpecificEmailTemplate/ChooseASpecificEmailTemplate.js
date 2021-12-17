import React from 'react';
import CodeIcon from '@mui/icons-material/Code';

const ChooseASpecificEmailTemplate = () => {
    return (
        <div className="px-10 py-5 h-[10rem]">
            <div className="flex flex-row items-center">
                <div className="flex flex-row w-full space-x-3 items-center">
                    <div className="flex">
                        <p className="font-semibold text-indigo-500">Selected template:</p>
                    </div>
                    <div className="flex  flex-1 border border-1 border-indigo-200 py-3 bg-indigo-100 items-center hover:bg-indigo-200 transition duration-150 ease-in-out cursor-pointer">
                        <div className="flex flex-1 items-center"/>
                        <div className="flex pr-2">
                            <CodeIcon className="rotate-90 text-sm font-semibold" />
                        </div>
                    </div>
                </div>

            </div>
                <div className="mt-5">
                    <p className="text-gray-400 text-sm">FYI: You've selected a specific template to send which means you cannot create or update the message
                        from here. If you want to change anything, go update the selected template.</p>
                </div>
        </div>
    );
};

export default ChooseASpecificEmailTemplate;

