import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import TopPart from "../../components/UserDashboardMainScreen_Components/TopPart";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";

const UserDashboardMainScreen = () => {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />


            <Footer />
        </div>
    );
};

export default UserDashboardMainScreen;
