import React from 'react';
import LeftSide from "../../components/EditFormScreen_Components/LeftSide";
import RightSide from "../../components/EditFormScreen_Components/RightSide";

const EditFormScreen = () => {
    return (
        <div className="h-screen w-screen flex flex-row bg-gray-100">
            <LeftSide />
            <RightSide />
        </div>
    );
};

export default EditFormScreen;
