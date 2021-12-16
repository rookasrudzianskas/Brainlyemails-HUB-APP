import React, {useState} from 'react';
import ContentBackgroundColor from "./components/ContentBackgroundColor/ContentBackgroundColor";
import ContentBorderColor from "./components/ContentBorderColor/ContentBorderColor";
import ButtonTextColor from "./components/ButtonTextColor/ButtonTextColor";
import TextColor from "./components/TextColor/TextColor";
import TitleTextColor from "./components/TitleTextColor/TitleTextColor";
import MutedTextColor from "./components/MutedTextColor/MutedTextColor";
import FooterTextColor from "./components/FooterTextColor/FooterTextColor";

const ShowAllColors = () => {

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
