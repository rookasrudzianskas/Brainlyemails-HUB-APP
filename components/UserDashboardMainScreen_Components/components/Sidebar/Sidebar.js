import React from 'react';
import {OVERVIEW} from "../../../../data/ListOfFeatures/Overview";
import {Icon} from "@mui/material";
import FeatureList from "./components/FeatureList";

const Sidebar = () => {
    return (
        <div className="flex max-w-2xl h-screen">
           <FeatureList />
        </div>
    );
};

export default Sidebar;
