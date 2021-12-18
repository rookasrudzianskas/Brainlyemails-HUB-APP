import React from 'react';
import {newGoalName} from "../../../../../contentManagement/atoms/NewAutomations/NewAutomations";
import {useRecoilState} from "recoil";

const AddGoals = () => {
    const [newGoalNameState, setNewGoalNameState] = useRecoilState(newGoalName);

    return (
        <div className="flex w-full flex flex-col bg-white border border-1 border-indigo-500 rounded-sm ">
            <div className="px-10 pt-12">
                <div className="max-w-5xl">
                    <p className="text-xl text-gray-800">
                        Goals <span className="text-gray-300 text-lg">(optional)</span>
                    </p>
                    <p className="text-gray-500 mt-3">
                        Contact who matched trigger conditions will receive this email sequence
                        unless he reaches the goal first. After the goal is reached, all messages
                        from the sequence are immediately unscheduled if not yet delivered.
                    </p>
                </div>

            </div>

            <div className="px-12 py-10 mt-6 flex">
                <p>+ Add condition</p>
            </div>
        </div>
    );
};

export default AddGoals;
