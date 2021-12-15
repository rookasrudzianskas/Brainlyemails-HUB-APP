import React, {useEffect} from 'react';
import Header from "../../components/DashboardComponents/Header/Header";
import Feed from "../../components/DashboardComponents/Feed";
import Dashboard from "../../components/DashboardComponents/pages/Dashboard";
import './css/style.scss';

import './charts/ChartjsConfig';

const DashboardScreen = () => {

    // const location = useLocation();

    // useEffect(() => {
    //     document.querySelector('html').style.scrollBehavior = 'auto'
    //     window.scroll({ top: 0 })
    //     document.querySelector('html').style.scrollBehavior = ''
    // }, [location.pathname]); // triggered on route change

    return (
        <div className="">
            {/*<Header />*/}
            <Dashboard />
        </div>
    );
};

export default DashboardScreen;
