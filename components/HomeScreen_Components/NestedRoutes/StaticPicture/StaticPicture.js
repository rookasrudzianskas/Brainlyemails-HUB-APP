import React, {useEffect, useState} from 'react';
import useScrollPosition from "@react-hook/window-scroll";
import {useRecoilState} from "recoil";
import {appScrollPosition} from "../../../../contentManagement/atoms/webAppScrollPosition/webAppScrollPosition";

const StaticPicture = () => {
    const scrollY = useScrollPosition(60 /*fps*/);
    const [scrollPosition, setScrollPosition] = useRecoilState(appScrollPosition);
    setScrollPosition(scrollY);
    console.log(scrollY);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if(scrollY > 2680) {
            setShow(true);
        }
    }

    useEffect(() => {
        handleShow();
    }, [scrollY]);


    return (
        <div className="flex justify-center overflow-y-hide">
            {show && (
                <div className="absolute">
                    <div className="fixed bottom-0 left-[28rem] px-80 py-64 bg-red-500">
                        <p>This is epic</p>
                    </div>
                    {/*<img className="fixed bottom-0 left-[28rem]" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>*/}
                </div>
            )}

            {/*<div className="App">*/}
            {/*    {Array(200)*/}
            {/*        .fill()*/}
            {/*        .map((_, i) => (*/}
            {/*            <p key={i}>lorem ipsum {scrollPosition}</p>*/}
            {/*        ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default StaticPicture;

// was the point of dead - 2681
