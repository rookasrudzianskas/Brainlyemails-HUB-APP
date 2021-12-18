import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import {useRecoilState} from "recoil";
import {handleCreateAutomationModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import AutomationCreationModal from "../../components/Modals/AutomationCreationModal";
import TopPart from "../../components/NewAutomationlScreen_Components/AutomationFeaturesContainer/TopPart";

const NewAutomationScreen = () => {
    const [handleCreateAutomationModalState, setHandleCreateAutomationModalState] = useRecoilState(handleCreateAutomationModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
            <Footer />
        </div>
    );
};

export default NewAutomationScreen;
