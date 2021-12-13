import React from 'react';

const TextComponent = ({text}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-xl">
                <p className="text-7xl font-bold text-white">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default TextComponent;
