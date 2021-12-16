import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import TopPart from "../../components/UserDashboardMainScreen_Components/TopPart";

const UserDashboardMainScreen = () => {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
        </div>
    );
};

export default UserDashboardMainScreen;
