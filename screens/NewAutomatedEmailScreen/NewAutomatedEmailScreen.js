import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart
    from "../../components/NewAutomationlScreen_Components/NewAutomatedEmailScreen_Components/AutomatedEmailFeaturesContainer/TopPart";
import {useRecoilState} from "recoil";
import {handleShowEmailPreviewModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import EmailPreviewDraftModal from "../../components/Modals/EmailPreviewDraftModal";

const NewAutomatedEmailScreen = () => {
    const [handleShowEmailPreviewModalState, setHandleShowEmailPreviewModalState] = useRecoilState(handleShowEmailPreviewModal);

    return (
        <div className="">
            {!handleShowEmailPreviewModalState && <Header/>}
            {/*<Header />*/}
            <TopPart />
            {handleShowEmailPreviewModalState && (
                <EmailPreviewDraftModal />
            )}
            {!handleShowEmailPreviewModalState && <Footer/>}
        </div>
    );
};

export default NewAutomatedEmailScreen;
