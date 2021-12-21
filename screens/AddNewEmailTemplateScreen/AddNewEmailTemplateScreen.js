import React from 'react';
import LeftSide from "../../components/BuildAndEditEmailScreen_Components/LeftSide";
import RightSide from "../../components/BuildAndEditEmailScreen_Components/RightSide";

const AddNewEmailTemplateScreen = () => {
    return (
        <div className="h-screen w-screen flex flex-row bg-gray-100 overflow-hidden">
            <LeftSide />
            <RightSide />
        </div>
    );
};

export default AddNewEmailTemplateScreen;
