import React, {useState} from 'react';

const SubscribedAndUnsubscribed = ({title, defaultState}) => {
    const [clicked, setClicked] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);

    return (
        <div className="mt-5 flex flex-row space-x-2">
            <div onClick={() => setClicked(!clicked)} className={`cursor-pointer ${clicked && 'border-b-[1px] border-indigo-500'}`} >
                <p className={`${!clicked ? 'text-indigo-300' : 'text-indigo-500'} `}>All</p>
            </div>

            <div onClick={() => setClicked2(!clicked2)} className={`cursor-pointer ${clicked2 && 'border-b-[1px] border-indigo-500'}`}>
                <p className={`${!clicked2 ? 'text-indigo-300' : 'text-indigo-500'} `}>Subscribed</p>
            </div>

            <div onClick={() => setClicked3(!clicked3)} className={`cursor-pointer ${clicked3 && 'border-b-[1px] border-indigo-500'}`}>
                <p className={`${!clicked3 ? 'text-indigo-300' : 'text-indigo-500'} `}>Unsubscribed</p>
            </div>
        </div>
    );
};

export default SubscribedAndUnsubscribed;
