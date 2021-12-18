import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart
    from "../../components/NewAutomationlScreen_Components/NewAutomatedEmailScreen_Components/AutomatedEmailFeaturesContainer/TopPart";

const NewAutomatedEmailScreen = () => {
    return (
        <div className="">
            <Header />
            <TopPart />
            <Footer />
        </div>
    );
};

export default NewAutomatedEmailScreen;
