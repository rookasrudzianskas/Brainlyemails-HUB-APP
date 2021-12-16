import React from 'react';
import Template from "./components/Template/Template";

const TemplatesScreen = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-4">
                <Template />
                <Template />
                <Template />
                <Template />
                <Template />
                <Template />
                <Template />
                <Template />
            </div>
        </div>
    );
};

export default TemplatesScreen;
