import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewContactsScreen_Components/TopPart";

const ContactsScreen = () => {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
            <Footer />
        </div>
    );
};

export default ContactsScreen;
