import React, {useState} from 'react';
import CodeIcon from '@mui/icons-material/Code';
import TriggerComponent from "../components/TriggerComponent";
import {useRecoilState} from "recoil";
import {addNewAutomationTriggers} from "../../../../contentManagement/atoms/AddNewAutomationTriggers/AddNewAutomationTriggers";
import AddMessages from "../components/AddMessages";
import TriggerSection from "../components/TriggerSection/TriggerSection";
import AddGoals from "../components/AddGoals";
import {handleAutomatedMessageSendingTimeModal} from "../../../../contentManagement/atoms/HandleModalStates/HandleModalStates";
import EmailDraftDiscardModal from "../../../Modals/EmailDraftDiscardModal";


const Center = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [addNewAutomationTriggersState, setAddNewAutomationTriggersState] = useRecoilState(addNewAutomationTriggers);

    // console.log(addNewAutomationTriggersState)

    return (
       <div className="flex w-full flex-col space-y-10">
            <div className="flex">
                <TriggerSection />
            </div>


           <div className="flex">
               <AddMessages />
           </div>

           <div className="flex">
               <AddGoals />
           </div>
       </div>
    );
};

export default Center;
