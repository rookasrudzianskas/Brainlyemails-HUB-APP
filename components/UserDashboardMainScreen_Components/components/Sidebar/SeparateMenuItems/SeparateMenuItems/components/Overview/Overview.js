import React, {useEffect, useState} from 'react';
import GridViewIcon from "@mui/icons-material/GridView";
import {useRecoilState} from "recoil";
import {selectedButton} from "../../../../../../../../contentManagement/atoms/SelectedButton/SelectedButton";

const Overview = () => {
    const [clicked, setClicked] = useState(true);
    const [alreadySelected, setAlreadySelected] = useRecoilState(selectedButton);

    const handleStyles = () => {
        if(clicked === false) {
            setClicked(true);
        } else {
            setClicked(false);
        }
    }

    // useEffect(() => {
    //     if(alreadySelected === null) {
    //         setAlreadySelected(false);
    //     }
    //
    //     if(alreadySelected === false) {
    //         handleStyles();
    //     }
    //
    // }, [alreadySelected]);


    // console.log(clicked)

    return (
        <div className="">
            <div className={`flex flex-row py-2 pl-4 pr-20 rounded-sm hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out `} onClick={handleStyles}>
                <GridViewIcon
                    // style={{ color: 'red', fontSize: 25 }}
                    className={`text-gray-300 ${clicked && 'text-indigo-500'}`}
                />
                <p className={`text-md ml-2 text-gray-600 focus:text-gray-900  ${clicked && 'text-indigo-500 font-bold'}`}>Overview</p>
            </div>
        </div>
    );
};

export default Overview;
