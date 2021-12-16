import React, {useState} from 'react';
import ContentBackgroundColor from "./components/ContentBackgroundColor/ContentBackgroundColor";
import ContentBorderColor from "./components/ContentBorderColor/ContentBorderColor";
import ButtonTextColor from "./components/ButtonTextColor/ButtonTextColor";
import TextColor from "./components/TextColor/TextColor";
import TitleTextColor from "./components/TitleTextColor/TitleTextColor";
import MutedTextColor from "./components/MutedTextColor/MutedTextColor";
import FooterTextColor from "./components/FooterTextColor/FooterTextColor";
import {useRecoilState} from "recoil";
import {bodyBackgroundColor} from "../../../../../../contentManagement/atoms/ChosenColors/ChosenColors";

const ShowAllColors = () => {
    // const [chosenColor, setChosenColor] = useRecoilState(bodyBackgroundColor);
    // console.log(">>>>>>>", chosenColor);

    return (
        <div className="">
            <ContentBackgroundColor />
            <ContentBorderColor />
            <ButtonTextColor />
            <TextColor />
            <TitleTextColor />
            <MutedTextColor />
            <FooterTextColor />
        </div>
    );
};

export default ShowAllColors;
