import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import AddNewProject from "../../components/NewProject_Components/AddNewProject";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";

const New = () => {
    return (
        <div className="">
            <Header />
            <AddNewProject />
            <Footer />
        </div>
    );
};

export default New;
