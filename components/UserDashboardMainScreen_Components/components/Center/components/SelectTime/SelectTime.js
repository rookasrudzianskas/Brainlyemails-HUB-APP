import React, {useState} from 'react';

const SelectTime = () => {
    const [selected, setSelected] = useState('first');

    const handleClick = () => {
        if(selected === 'first') {
            setSelected('second');
        } else {
            setSelected('first');
        }
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-1"/>
            <div className="flex space-x-2">
                <p onClick={handleClick} className={`text-sm ${selected === 'first' ? 'text-gray-800' : 'text-gray-400'} hover:opacity-80 cursor-pointer transition duration-150`}>30 days</p>
                <p onClick={handleClick} className={`text-sm ${selected === 'second' ? 'text-gray-800' : 'text-gray-400'} hover:opacity-80 cursor-pointer transition duration-150`}>24 hours</p>
            </div>
        </div>
    );
};

export default SelectTime;
