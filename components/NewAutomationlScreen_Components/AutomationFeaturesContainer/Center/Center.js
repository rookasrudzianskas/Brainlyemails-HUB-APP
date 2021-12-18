import React, {useState} from 'react';
import CodeIcon from '@mui/icons-material/Code';
import TriggerComponent from "../components/TriggerComponent";
import {useRecoilState} from "recoil";
import {addNewAutomationTriggers} from "../../../../contentManagement/atoms/AddNewAutomationTriggers/AddNewAutomationTriggers";
import AddMessages from "../components/AddMessages";
import TriggerSection from "../components/TriggerSection/TriggerSection";


const Center = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [addNewAutomationTriggersState, setAddNewAutomationTriggersState] = useRecoilState(addNewAutomationTriggers);
    // console.log(addNewAutomationTriggersState)

    return (
       <div className="flex w-full flex-col">
            <div className="flex">
                <TriggerSection />
            </div>

           <div className="flex">
               <AddMessages />
           </div>
       </div>
    );
};

export default Center;
