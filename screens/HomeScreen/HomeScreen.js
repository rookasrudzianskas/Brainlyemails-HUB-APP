import React, {useEffect, useState} from 'react';
import Header from "../../components/HomeScreen_Components/Header";
import FrontStart from "../../components/HomeScreen_Components/FrontStart";
import Comment from "../../components/HomeScreen_Components/Comment";
import HorizontalScrollableList from "../../components/HomeScreen_Components/HorizontalScrollableList/HorizontalScrollableList";
import LoadingExplanationText from "../../components/HomeScreen_Components/LoadingExplanationText";
import BrainlyemailsCheatCode from "../../components/HomeScreen_Components/BrainlyemailsCheatCode";
import OverallNestedRoute from "../../components/HomeScreen_Components/NestedRoutes/OverallNestedRoute";
import BrainlyemailsNestedRoutes from "../../components/HomeScreen_Components/BrainlyemailsNestedRoutes";

const HomeScreen = () => {



    return (
        <div className="text-white bg-black scrollbar-hide">
            <Header />
            <FrontStart />
            <Comment />
            <HorizontalScrollableList />
            <LoadingExplanationText />
            <BrainlyemailsCheatCode />
            <OverallNestedRoute />
            <BrainlyemailsNestedRoutes />
        </div>
    );
};

export default HomeScreen;


export async function getServerSideProps() {
    console.log("rendering now");
    return { props: {} };
}
