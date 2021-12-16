import React from 'react';
import SendIcon from "@mui/icons-material/Send";

const Messenger = () => {
    return (
        <div className="">
                <div className="flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out">
                    <SendIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className="text-gray-300"
                    />
                    <p className="text-md ml-2  text-gray-600">Messenger</p>
                </div>
        </div>
    );
};

export default Messenger;
