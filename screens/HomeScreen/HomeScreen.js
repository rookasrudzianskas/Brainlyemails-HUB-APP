import React, {useEffect, useState} from 'react';
import Header from "../../components/HomeScreen_Components/Header";
import FrontStart from "../../components/HomeScreen_Components/FrontStart";
import Comment from "../../components/HomeScreen_Components/Comment";
import HorizontalScrollableList from "../../components/HomeScreen_Components/HorizontalScrollableList/HorizontalScrollableList";
import LoadingExplanationText from "../../components/HomeScreen_Components/LoadingExplanationText";
import BrainlyemailsCheatCode from "../../components/HomeScreen_Components/BrainlyemailsCheatCode";
import OverallNestedRoute from "../../components/HomeScreen_Components/NestedRoutes/OverallNestedRoute";
import BrainlyemailsNestedRoutes from "../../components/HomeScreen_Components/BrainlyemailsNestedRoutes";
import NotesAboutIt from "../../components/HomeScreen_Components/WhyBrainlyemailsIsLegit/NotesAboutIt";
import WithBrainlyemailsAndWithout
    from "../../components/HomeScreen_Components/WithBrainlyemailsAndWithout/WithBrainlyemailsAndWithout";
import SpinnersScreen from "../../components/HomeScreen_Components/SpinnersAnimation/ScreenForSpinners";
import OverallNestedRoute2 from "../../components/HomeScreen_Components/NestedRoutes#2/OverallNestedRoute";
import EmailAsFastAsInstant from "../../components/HomeScreen_Components/EmailAsFastAsInstant";
import DataLoadingExplanationText from "../../components/HomeScreen_Components/DataLoadingExplanationText";
import DataUpdatesText from "../../components/HomeScreen_Components/DataUpdatesText";
import TwoSides from "../../components/HomeScreen_Components/TwoScreenSidesScrollThing/TwoSides/screens/TwoSides";
import ShakingScreen from "../../components/HomeScreen_Components/ShakingScreen";
import FirstScreen from "../../components/HomeScreen_Components/TwoScrollableScreensConnected/FirstScreen";
import SecondScreen from "../../components/HomeScreen_Components/TwoScrollableScreensConnected/SecondScreen";
import useScrollPosition from "@react-hook/window-scroll";

const HomeScreen = () => {

    const scrollY = useScrollPosition(60 /*fps*/)
    console.log(scrollY)



    return (
        <div className="text-white bg-black scrollbar-hide">
            <Header />
            <FrontStart />
            <Comment />
            <HorizontalScrollableList />
            <LoadingExplanationText />
            <BrainlyemailsCheatCode />
            <FirstScreen />
            {/*<OverallNestedRoute />*/}
            <BrainlyemailsNestedRoutes />
            <NotesAboutIt />
            <WithBrainlyemailsAndWithout />
            <SpinnersScreen />
            <EmailAsFastAsInstant />
            <SecondScreen />
            {/*<OverallNestedRoute2 />*/}
            <DataLoadingExplanationText />
            <DataUpdatesText />
            <TwoSides />
            {/*<NotesAboutIt />*/}
            {scrollY >= 10000 && (
                <ShakingScreen />
            )}
            <NotesAboutIt />
            {/*<ShakingScreen />*/}
        </div>
    );
};

export default HomeScreen;


export async function getServerSideProps() {
    console.log("rendering now");
    return { props: {} };
}
