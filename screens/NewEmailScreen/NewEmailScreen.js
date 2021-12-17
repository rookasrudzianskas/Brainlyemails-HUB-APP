import React from 'react';
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewEmailScreen_Components/EmailFeaturesContainer/TopPart";
import {useRecoilState} from "recoil";
import {handleDiscardEmailModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import EmailDraftDiscardModal from "../../components/Modals/EmailDraftDiscardModal";
import Header from "../../components/DashboardComponents/partials/Header";

const NewEmailScreen = () => {

    const [handleDiscardEmailModalState, setHandleDiscardEmailModalState] = useRecoilState(handleDiscardEmailModal);
    console.log(handleDiscardEmailModalState);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleDiscardEmailModalState ?  <Header/> : null}
            <TopPart />
            {!handleDiscardEmailModalState ? <Footer /> : null}

            {handleDiscardEmailModalState && (
                <EmailDraftDiscardModal />
            )}
        </div>
    );
};

export default NewEmailScreen;
