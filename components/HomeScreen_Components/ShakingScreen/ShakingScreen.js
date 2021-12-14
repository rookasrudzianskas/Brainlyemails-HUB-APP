import React, {useRef} from 'react';

const ShakingScreen = () => {
    const linearyaxis = useRef();

    return (
        <div className="">
            {/*<div className="">*/}
            {/*    <img className=" hover:animate-vote h-screen w-screen" src={'https://firebasestorage.googleapis.com/v0/b/rokas-brainlyemails.appspot.com/o/busted.jpeg?alt=media&token=d4ab48fe-af02-4f11-98a4-04371d092404'} alt=""/>*/}
            {/*</div>*/}

            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <img className=" hover:animate-vote h-screen w-screen" src={'https://firebasestorage.googleapis.com/v0/b/rokas-brainlyemails.appspot.com/o/busted.jpeg?alt=media&token=d4ab48fe-af02-4f11-98a4-04371d092404'} alt=""/>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black">

                </div>
            </>
        </div>
    );
};

export default ShakingScreen;
// hover:animate-vote - in case
