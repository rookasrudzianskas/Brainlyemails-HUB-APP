import React, {useState} from 'react';
import SendIcon from "@mui/icons-material/Send";

const Messenger = () => {
    const [clicked, setClicked] = useState(false);
    const handleStyles = () => {
        if(clicked === false) {
            setClicked(true);
        } else {
            setClicked(false);
        }
    }

    return (
        <div className="">
            <div className={`flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out `} onClick={handleStyles}>
                    <SendIcon
                        // style={{ color: 'red', fontSize: 25 }}
                        className={`text-gray-300 ${clicked && 'text-gray-900'}`}
                    />
                <p className={`text-md ml-2 text-gray-600 focus:text-gray-900  ${clicked && 'text-gray-900 font-bold'}`}>Messenger</p>
                </div>
        </div>
    );
};

export default Messenger;
