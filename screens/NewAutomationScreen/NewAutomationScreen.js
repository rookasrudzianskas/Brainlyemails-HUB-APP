import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import {useRecoilState} from "recoil";
import {handleCreateAutomationModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import AutomationCreationModal from "../../components/Modals/AutomationCreationModal";

const NewAutomationScreen = () => {
    const [handleCreateAutomationModalState, setHandleCreateAutomationModalState] = useRecoilState(handleCreateAutomationModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {/*{!handleCreateAutomationModalState && <Header/>}*/}
            <Header />
            <Footer />

            {/*{handleCreateAutomationModalState && (*/}
            {/*    <AutomationCreationModal />*/}
            {/*)}*/}

            {/*{!handleCreateAutomationModalState && <Footer />}*/}
        </div>
    );
};

export default NewAutomationScreen;
