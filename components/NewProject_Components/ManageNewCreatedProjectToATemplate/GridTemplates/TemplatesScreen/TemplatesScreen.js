import React from 'react';
import Template from "./components/Template/Template";

const TemplatesScreen = () => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-4">
                <Template text={'Single sign-on'} />
                <Template text={'Welcome'} />
                <Template text={'Trial expired'} />
                <Template text={'Password reset'} />
                <Template text={'Account activation'} />
                <Template text={'Receipt'} />
                <Template text={'Canceled subscription'} />
                <Template text={'Payment failed'} />
            </div>
        </div>
    );
};

export default TemplatesScreen;
