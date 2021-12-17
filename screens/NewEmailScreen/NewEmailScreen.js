import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewEmailScreen_Components/EmailFeaturesContainer/TopPart";
import TopPagination from "../../components/NewEmailScreen_Components/EmailFeaturesContainer";
import {useRecoilState} from "recoil";
import {handleDiscardEmailModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import EmailDraftDiscardModal from "../../components/Modals/EmailDraftDiscardModal";

const NewEmailScreen = () => {

    const [handleDiscardEmailModalState, setHandleDiscardEmailModalState] = useRecoilState(handleDiscardEmailModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleDiscardEmailModalState ?  <EmailDraftDiscardModal/> : null}
            <TopPart />
            {!handleDiscardEmailModalState ? <Footer /> : null}


            {handleDiscardEmailModalState && (
                <EmailDraftDiscardModal />
            )}
        </div>
    );
};

export default NewEmailScreen;
