import React, {useState} from 'react';
import {Player} from "@lottiefiles/react-lottie-player";
import {Checkbox} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Template = ({text}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if(show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <div className="flex flex-col w-[15rem] h-[15rem] bg-red-500 border border-1 border-gray-300 rounded-sm hover:shadow-md transition duration-150 ease-in-out" onClick={handleShow}>
            <div className="flex flex-1 items-center justify-center">
                <img src="https://freesvg.org/img/Loading_icon_no_fade.png" className="w-[12rem] h-[12rem]" alt=""/>
            </div>

            {show ? (
                <div className="flex bg-gray-100 h-[3rem] items-center" >
                    <div className="flex flex-row items-center pl-4">
                        <div className="flex items-center justify-center w-6 h-6  bg-indigo-500  border border-1 border-indigo-400 rounded-sm">
                            {/*<Player*/}
                            {/*    autoplay*/}
                            {/*    loop={true}*/}
                            {/*    src={'https://assets8.lottiefiles.com/private_files/lf30_7hzb2r1r.json'}*/}
                            {/*    style={{height: 20, width: 20}}*/}
                            {/*/>*/}
                            {/*<Checkbox defaultChecked />*/}
                            <CheckIcon className="text-white text-sm" size={10} />

                        </div>
                        <div>
                            <p className="text-gray-700 ml-2 truncate">{text}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex bg-gray-100 h-[3rem] items-center hover:bg-gray-200 cursor-pointer transition duration-150 ease-in-out" >
                    <div className="flex flex-row items-center pl-4">
                        <div className="flex w-6 h-6 bg-gray-200 border border-1 border-gray-300">
                            {/*<Player*/}
                            {/*    autoplay*/}
                            {/*    loop={true}*/}
                            {/*    src={'https://assets8.lottiefiles.com/private_files/lf30_7hzb2r1r.json'}*/}
                            {/*    style={{height: 20, width: 20}}*/}
                            {/*/>*/}
                            {/*<Checkbox defaultChecked />*/}

                        </div>
                        <div className="overflow-hidden">
                            <p className="text-gray-700  ml-2 truncate text-ellipsis overflow-hidden">{text}</p>
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
};

export default Template;

// https://assets8.lottiefiles.com/private_files/lf30_7hzb2r1r.json
