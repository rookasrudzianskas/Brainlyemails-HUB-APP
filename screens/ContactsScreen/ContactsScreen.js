import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewContactsScreen_Components/TopPart";
import {useRecoilState} from "recoil";
import {
    handleNewContactCreationModal,
    handleNewGroupCreationModal
} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import NewGroupCreationModal from "../../components/Modals/NewGroupCreationModal";
import NewContactCreationModal from "../../components/Modals/NewContactCreationModal";

const ContactsScreen = () => {

    const [handleNewGroupCreationModalState, setHandleNewGroupCreationModalState] = useRecoilState(handleNewGroupCreationModal);
    const [handleNewContactCreationModalState, setHandleNewContactCreationModalState] = useRecoilState(handleNewContactCreationModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleNewGroupCreationModalState || !handleNewContactCreationModalState && <Header/>}
            <TopPart />

            {handleNewGroupCreationModalState && (
                <NewGroupCreationModal />
            )}

            {handleNewContactCreationModalState && (
                <NewContactCreationModal />
            )}

            {!handleNewGroupCreationModalState || !handleNewContactCreationModalState && <Footer />}
        </div>
    );
};

export default ContactsScreen;
