import React from 'react';
import Overview from "../../SeparateMenuItems/SeparateMenuItems/components/Overview";
import Messenger from "../../SeparateMenuItems/SeparateMenuItems/components/Messenger";
import Automation from "../../SeparateMenuItems/SeparateMenuItems/components/Automation";
import Contacts from "../../SeparateMenuItems/SeparateMenuItems/components/Contacts";
import Forms from "../../SeparateMenuItems/SeparateMenuItems/components/Forms";
import Templates from "../../SeparateMenuItems/SeparateMenuItems/components/Templates";
import History from "../../SeparateMenuItems/SeparateMenuItems/components/History";
import API from "../../SeparateMenuItems/SeparateMenuItems/components/API";
import Settings from "../../SeparateMenuItems/SeparateMenuItems/components/Settings";

const FeatureList = () => {
    return (
        <div className="">
            <Overview />
            <div className="mt-10">
                <Messenger />
                <Automation />
                <Contacts />
                <Forms />
            </div>

            <div className="mt-10">
                <Templates />
                <History />
                <API />
            </div>

            <div className="mt-10">
                <Settings />
            </div>
        </div>
    );
};

export default FeatureList;
