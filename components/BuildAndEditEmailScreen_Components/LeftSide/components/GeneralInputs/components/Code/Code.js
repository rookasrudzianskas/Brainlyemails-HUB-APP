import React from 'react';
import CodeIcon from '@mui/icons-material/Code';

const Code = () => {
    return (
        <div className="px-6 py-3 flex flex-row space-x-2 text-indigo-200 hover:bg-indigo-200 hover:text-indigo-500 cursor-pointer transition duration-150 ease-in-out">
            <CodeIcon />
            <p>Code</p>
        </div>
    );
};

export default Code;
