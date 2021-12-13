import React from 'react';
import TextComponent from "../SmallerComponents/TextComponent";

const FirstSide = () => {
    return (
        <div className="bg-black flex-1 overflow-y-scroll scrollbar-hide h-screen ">
            {/* @TODO to make it snap*/}
            <div className="mb-96">

            </div>
            <div className="flex flex-col items-center justify-center  space-y-[30rem]">
                <TextComponent text={'It’s so simple it’s kind of silly. Just make a form...'} />
                <TextComponent text={'...and an action on the server. The whole thing works with no JavaScript!'}/>
                <TextComponent text={'Brainlyemails runs the action server side, revalidates data client side, and even handles race conditions from resubmissions.'} />
                <TextComponent text={'Get fancy with transition hooks and make some pending UI. Remix handles all the state, you simply ask for it.'} />
                <TextComponent text={'Or get jiggy with some optimistic UI. Brainlyemails provides the data being sent to the server so you can skip the busy spinners for mutations, too.'} />
                <TextComponent text={'HTML Forms. Who knew?'} />
            </div>

            <div className="mb-96">

            </div>
        </div>
    );
};

export default FirstSide;
