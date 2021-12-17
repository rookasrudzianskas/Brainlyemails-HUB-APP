import React from 'react';
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewEmailScreen_Components/EmailFeaturesContainer/TopPart";
import {useRecoilState} from "recoil";
import {
    handleDiscardEmailModal, handleEmailSchedulingSystemModal,
    handleShowEmailPreviewModal
} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import EmailDraftDiscardModal from "../../components/Modals/EmailDraftDiscardModal";
import Header from "../../components/DashboardComponents/partials/Header";
import EmailPreviewDraftModal from "../../components/Modals/EmailPreviewDraftModal";
import EmailSchedulingSendModal from "../../components/Modals/EmailSchedulingSendModal";

const NewEmailScreen = () => {

    const [handleDiscardEmailModalState, setHandleDiscardEmailModalState] = useRecoilState(handleDiscardEmailModal);
    const [handleShowEmailPreviewModalState, setHandleShowEmailPreviewModalState] = useRecoilState(handleShowEmailPreviewModal);
    const [handleEmailSchedulingSystemModalState, setHandleEmailSchedulingSystemModalState] = useRecoilState(handleEmailSchedulingSystemModal);

    // console.log(handleDiscardEmailModalState);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleDiscardEmailModalState && !handleShowEmailPreviewModalState && !handleEmailSchedulingSystemModalState ?  <Header/> : null}
            <TopPart />
            {!handleDiscardEmailModalState && !handleShowEmailPreviewModalState && !handleEmailSchedulingSystemModalState ? <Footer /> : null}

            {handleDiscardEmailModalState && (
                <EmailDraftDiscardModal />
            )}

            {handleShowEmailPreviewModalState && (
                <EmailPreviewDraftModal />
            )}

            {handleEmailSchedulingSystemModalState && (
                <EmailSchedulingSendModal />
            )}
        </div>
    );
};

export default NewEmailScreen;
