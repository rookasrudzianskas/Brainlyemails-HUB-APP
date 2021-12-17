import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/AutomationScreen_Components/TopPart";
import {useRecoilState} from "recoil";
import {handleCreateAutomationModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import AutomationCreationModal from "../../components/Modals/AutomationCreationModal";

const AutomationScreen = () => {
    const [handleCreateAutomationModalState, setHandleCreateAutomationModalState] = useRecoilState(handleCreateAutomationModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleCreateAutomationModalState && <Header/>}
            <TopPart />

            {handleCreateAutomationModalState && (
                <AutomationCreationModal />
            )}

            {!handleCreateAutomationModalState && <Footer/>}
        </div>
    );
};

export default AutomationScreen;
