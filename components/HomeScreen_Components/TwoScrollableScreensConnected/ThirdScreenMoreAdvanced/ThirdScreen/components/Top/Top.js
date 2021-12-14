import React from 'react';
import ScrollViewWithDetails from "../../../../NestedRoutes/ScrollViewWithDetails";
import ScrollViewWithDetails2 from "../../../../NestedRoutes#2/ScrollViewWithDetails";

const Top = () => {
    return (
        <div className="bg-black flex-1 overflow-x-scroll scrollbar-hide x-screen text-white ">
            <ScrollViewWithDetails2 />
        </div>
    );
};

export default Top;
