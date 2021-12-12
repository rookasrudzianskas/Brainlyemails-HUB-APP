import React from 'react';
import ScrollViewWithDetails from "../ScrollViewWithDetails";
import StaticPicture from "../StaticPicture";

const OverallNestedRoute = () => {
    return (
        <div>
            <main>
                <ScrollViewWithDetails />
                <StaticPicture />
            </main>
        </div>
    );
};

export default OverallNestedRoute;
