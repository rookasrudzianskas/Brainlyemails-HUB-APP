import React, {useState} from 'react';
import HistoryIcon from "@mui/icons-material/History";
import {useRecoilState} from "recoil";
import {selectedButton} from "../../../../../../../../contentManagement/atoms/SelectedButton/SelectedButton";

const History = () => {

    const [clicked, setClicked] = useState(false);
    const [alreadySelected, setAlreadySelected] = useRecoilState(selectedButton);

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
                <HistoryIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className={`text-gray-300 ${clicked && 'text-gray-900'}`}
                />
                <p className={`text-md ml-2 text-gray-600 focus:text-gray-900  ${clicked && 'text-gray-900 font-bold'}`}>History</p>
            </div>
        </div>
    );
};

export default History;
