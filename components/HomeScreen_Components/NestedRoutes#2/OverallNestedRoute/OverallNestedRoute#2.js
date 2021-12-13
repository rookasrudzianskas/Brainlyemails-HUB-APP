import React, {useEffect, useState} from 'react';
import ScrollViewWithDetails2 from "../ScrollViewWithDetails";
import StaticPicture from "../StaticPicture";
import useScrollPosition from "@react-hook/window-scroll";
import {useRecoilState} from "recoil";
import {appScrollPosition} from "../../../../contentManagement/atoms/webAppScrollPosition/webAppScrollPosition";
import FadeIn from "react-fade-in";
import InlineBlockPicture2 from "../InlineBlockPicture";

const OverallNestedRoute2 = () => {
    const scrollY = useScrollPosition(60 /*fps*/);
    const [scrollPosition, setScrollPosition] = useRecoilState(appScrollPosition);
    setScrollPosition(scrollY);
    console.log(scrollY);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        if(scrollY > 2307) {
            setShow(true);
        } else if (scrollY < 2000) {
            setShow(false);
        }
    }

    useEffect(() => {
        handleShow();
    }, [scrollY]);


    return (
        <div>
            <main>
            <ScrollViewWithDetails2 />
                {/*{show && (*/}
                {/*    <FadeIn*/}
                {/*        duration={1000}*/}
                {/*    >*/}
                {/*      <StaticPicture />*/}
                {/*    </FadeIn>*/}
                {/*)}*/}

                {scrollY >= 2307 && (
                    <FadeIn
                        duration={200}
                    >
                        <InlineBlockPicture2 />
                    </FadeIn>
                )}
            </main>
        </div>
    );
};

export default OverallNestedRoute2;

// 4310
