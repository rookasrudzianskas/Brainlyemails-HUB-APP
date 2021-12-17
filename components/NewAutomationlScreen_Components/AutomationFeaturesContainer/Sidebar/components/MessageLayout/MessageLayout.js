import React, {useState} from 'react';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import EmailIcon from '@mui/icons-material/Email';

const MessageLayout = () => {
    const [addStyles, setAddStyles] = useState(1);
    const handleClickForWithLayout = () => {
        setAddStyles(addStyles + 1);
    }

    const handleClickForWithoutLayout = () => {
        setAddStyles(addStyles - 1);
    }

    return (
        <div className="mt-3">
            <div onClick={handleClickForWithLayout} className="flex flex-row p-3 items-center hover:bg-indigo-100 rounded-sm transition duration-150 ease-in-out cursor-pointer">
                <AttachEmailIcon className="text-2xl text-gray-700" style={{fontSize: 40}} />
                <div className="flex flex-col ml-3">
                    <p className={`${addStyles === 1 ? 'text-gray-800' : 'text-gray-400'}`}>With layout</p>
                    <p className="text-xs text-gray-400">Branded message with logo</p>
                </div>
            </div>

            <div className="mt-3">
                <div onClick={handleClickForWithoutLayout} className="flex flex-row p-3 items-center hover:bg-indigo-100 rounded-sm transition duration-150 ease-in-out cursor-pointer">
                    <EmailIcon className="text-2xl text-gray-700" style={{fontSize: 40}} />
                    <div className="flex flex-col ml-3">
                        <p className={`${addStyles === 2 ? 'text-gray-800' : 'text-gray-400'}`}>Without layout</p>
                        <p className="text-xs text-gray-400">Simple message, no branding</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageLayout;
