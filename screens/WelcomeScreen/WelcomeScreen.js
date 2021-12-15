import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import MyProjects from "../../components/WelcomeScreen_Components/MyProjects";
import YouHaveNoProjects from "../../components/WelcomeScreen_Components/YouHaveNoProjects";

const WelcomeScreen = () => {
    return (
        <div className="bg-red-300 h-screen">
            <Header />

            {/*<MyProjects />*/}
            <YouHaveNoProjects />
        </div>
    );
};

export default WelcomeScreen;
