import React from 'react';
import Header from "../../components/DashboardComponents/Header/Header";
import Feed from "../../components/DashboardComponents/Feed";

const DashboardScreen = () => {
    return (
        <div className="bg-black h-screen">
            {/*<Header />*/}
            <Feed />
        </div>
    );
};

export default DashboardScreen;
