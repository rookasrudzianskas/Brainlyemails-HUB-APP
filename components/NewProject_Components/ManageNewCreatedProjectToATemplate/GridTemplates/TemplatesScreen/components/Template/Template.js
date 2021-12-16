import React from 'react';
import {Player} from "@lottiefiles/react-lottie-player";

const Template = () => {
    return (
        <div className="flex flex-col w-[15rem] h-[15rem] bg-red-500 border border-1 border-gray-300 rounded-sm">
            <div className="flex flex-1 items-center justify-center">
                <img src="https://freesvg.org/img/Loading_icon_no_fade.png" className="w-[12rem] h-[12rem]" alt=""/>
            </div>

            <div className="flex bg-gray-100 h-[3rem] items-center" >
                <div className="flex flex-row items-center pl-4">
                    <div className="flex w-5 h-5 bg-gray-200 border border-1 border-gray-300">

                    </div>
                    <div>
                        <p className="text-gray-700">Single sign-on</p>
                    </div>
                </div>

                {/*<Player*/}
                {/*    autoplay*/}
                {/*    loop*/}
                {/*    src={'https://assets8.lottiefiles.com/private_files/lf30_7hzb2r1r.json'}*/}
                {/*    style={{height: 20, width: 20}}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default Template;

// https://assets8.lottiefiles.com/private_files/lf30_7hzb2r1r.json
