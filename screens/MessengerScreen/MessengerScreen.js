import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/MessengerScreen_Components/TopPart";
import {useRecoilState} from "recoil";
import {handleDiscardEmailModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";

const MessengerScreen = () => {

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
            <Footer />

        </div>
    );
};

export default MessengerScreen;

