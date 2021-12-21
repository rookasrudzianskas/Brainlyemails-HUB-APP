import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/TemplatesScreen_Components/TopPart";

const TemplatesScreen = () => {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
            <Footer />
        </div>
    );
};

export default TemplatesScreen;
