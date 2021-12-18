import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";

import TopPart from "../../components/NewAutomationlScreen_Components/AutomationFeaturesContainer/TopPart";
import {useRecoilState} from "recoil";
import {handleAutomatedMessageSendingTimeModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";


const NewAutomationScreen = () => {
    const [handleAutomatedMessageSendingTimeModalState, setHandleAutomatedMessageSendingTimeModalState] = useRecoilState(handleAutomatedMessageSendingTimeModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleAutomatedMessageSendingTimeModalState && <Header />}
            <TopPart />

            {!handleAutomatedMessageSendingTimeModalState && <Footer />}
        </div>
    );
};

export default NewAutomationScreen;
