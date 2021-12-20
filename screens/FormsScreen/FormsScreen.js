import React from 'react';
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import Header from "../../components/DashboardComponents/partials/Header";
import TopPart from "../../components/FormsScreen_Components/TopPart";
import {useRecoilState} from "recoil";
import {handleNewFormCreationModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import CreateFormModalMain from "../../components/Modals/CreateFormModalMain";

const FormsScreen = () => {
    const [handleNewFormCreationModalState, setHandleNewFormCreationModalState] = useRecoilState(handleNewFormCreationModal);

    return (
        <div className="">
            {!handleNewFormCreationModalState && <Header/>}
            <TopPart/>
            {handleNewFormCreationModalState && (
                <CreateFormModalMain />
            )}
            {!handleNewFormCreationModalState && <Footer/>}
        </div>
    );
};

export default FormsScreen;
