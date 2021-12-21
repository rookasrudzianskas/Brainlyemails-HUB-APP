import React, {useState} from 'react';
import Text from "./components/Text";
import Button from "./components/Button";
import ListComponent from "./components/List";
import Table from "./components/Table";
import Separator from "./components/Separator";
import Image from "./components/Image";
import Chart from "./components/Chart";
import Code from "./components/Code";


const GeneralInputs = () => {

    return (
        <div className="">
                <Text />
                <Button />
                <ListComponent />
                <Table />
                <Separator />
                <Image />
                <Chart />
                <Code />
        </div>
    );
};

export default GeneralInputs;
