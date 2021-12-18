import React, {useState} from 'react';

const SubscribedAndUnsubscribed = ({title, defaultState}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="mt-5">
            <div onClick={() => setClicked(!clicked)} className="cursor-pointer">
                <p className={`${clicked ? 'text-indigo-300' : 'text-indigo-500'} ${defaultState && 'text-indigo-500 border-b-4 border-indigo-500s'}`}>{title}</p>
            </div>
        </div>
    );
};

export default SubscribedAndUnsubscribed;
