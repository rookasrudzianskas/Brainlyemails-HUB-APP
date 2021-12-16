import React, {useState} from 'react';
import GridViewIcon from "@mui/icons-material/GridView";

const Overview = () => {
    const [clicked, setClicked] = useState(true);
    const handleStyles = () => {
        if(clicked === false) {
            setClicked(true);
        } else {
            setClicked(false);
        }
    }

    // console.log(clicked)

    return (
        <div className="">
            <div className={`flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out `} onClick={handleStyles}>
                <GridViewIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className={`text-gray-300 ${clicked && 'text-gray-900'}`}
                />
                <p className={`text-md ml-2 text-gray-600 focus:text-gray-900  ${clicked && 'text-gray-900 font-bold'}`}>Overview</p>
            </div>
        </div>
    );
};

export default Overview;
