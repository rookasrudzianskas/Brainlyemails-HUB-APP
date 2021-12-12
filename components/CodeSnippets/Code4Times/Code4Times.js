import React from 'react';

const Code4Times = ({codes}) => {
    // console.log(codes)
    return (
        <div className="mx-2">
            <div className={`${codes?.bgColor} flex items-center justify-center px-6 py-2 rounded-full hover:cursor-pointer transition duration-150 ease-in-out`}>
                <h1 className={`${codes?.textColor} hover:${codes?.textHoverColor} cursor-pointer transition duration-150 ease-in-out`}>{codes?.text}</h1>
            </div>
        </div>
    );
};

export default Code4Times;
