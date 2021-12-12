import React, {useEffect, useState} from 'react';

const StaticPicture = () => {

    // const {
    //     scrolling,
    //     time,
    //     speed,
    //     direction,
    //     position,
    //     relativeDistance,
    //     totalDistance
    // } = useScrollData();
    //
    // useEffect(() =>  {
    //     console.log(`Scrolling ${scrolling} at ${time}`);
    //     console.log(speed);
    //     console.log(direction);
    //     console.log(position);
    //     console.log(relativeDistance);
    //     console.log(totalDistance);
    //     transitionNavBar();
    // }, [position]);
    // const [show, handleShow] = useState(false);
    //
    // const transitionNavBar = () => {
    //     if(time > 250) {
    //         handleShow(true);
    //     }
    // };

    // console.log('The state is', show);



    // show the scroll y position
    // console.log('This is window 🔥', window.scrollY);

    return (
        <div className="flex justify-center overflow-y-hide">
            {/*{show && (*/}
                <div className="absolute">
                    <div className="fixed bottom-0 left-[28rem] px-80 py-64 bg-red-500">
                        <p>This is epic</p>
                    </div>
                    {/*<img className="fixed bottom-0 left-[28rem]" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>*/}
                </div>
            {/*// )}*/}

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
