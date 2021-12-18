import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewContactsScreen_Components/TopPart";
import {useRecoilState} from "recoil";
import {handleNewGroupCreationModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import NewGroupCreationModal from "../../components/Modals/NewGroupCreationModal";

const ContactsScreen = () => {

    const [handleNewGroupCreationModalState, setHandleNewGroupCreationModalState] = useRecoilState(handleNewGroupCreationModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            {!handleNewGroupCreationModalState && <Header/>}
            <TopPart />

            {handleNewGroupCreationModalState && (
                <NewGroupCreationModal />
            )}
            {!handleNewGroupCreationModalState && <Footer />}
        </div>
    );
};

export default ContactsScreen;
