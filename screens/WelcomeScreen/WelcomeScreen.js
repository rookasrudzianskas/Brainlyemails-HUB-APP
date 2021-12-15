import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import MyProjects from "../../components/WelcomeScreen_Components/MyProjects";
import YouHaveNoProjects from "../../components/WelcomeScreen_Components/YouHaveNoProjects";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";

const WelcomeScreen = () => {
    return (
        <div className="bg-red-300 h-screen scrollbar-hide">
            <Header />

            {/*<MyProjects />*/}
            <YouHaveNoProjects />

            <Footer />
        </div>
    );
};

export default WelcomeScreen;
