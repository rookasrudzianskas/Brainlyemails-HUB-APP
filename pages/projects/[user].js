import React from 'react';
import TemplatesScreen
    from "../../components/NewProject_Components/ManageNewCreatedProjectToATemplate/GridTemplates/TemplatesScreen/TemplatesScreen";
import Header from "../../components/DashboardComponents/partials/Header";
import UserDashboardMainScreen from "../../screens/UserDashboardMainScreen";

const UserDashboard = () => {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <UserDashboardMainScreen />
        </div>
    );
};

export default UserDashboard;
