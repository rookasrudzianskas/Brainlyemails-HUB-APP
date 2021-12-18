import React from 'react';
import {newGoalName} from "../../../../../contentManagement/atoms/NewAutomations/NewAutomations";
import {useRecoilState} from "recoil";
import GoalComponent from "../../GoalComponent";
import FiltersMatch from "../../GoalComponent/components/FiltersMatch/FiltersMatch";
import TriggerComponent from "../TriggerComponent";

const AddGoals = () => {
    const [newGoalNameState, setNewGoalNameState] = useRecoilState(newGoalName);

    return (
        <div className="flex w-full flex flex-col bg-white border border-1 border-indigo-500 rounded-sm px-10">
            <div className=" pt-12">
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

            {newGoalNameState === 0 && <div className="mb-6"/> }

            {newGoalNameState >= 1 && (
                <div>
                    <div className="flex flex-col space-y-5 w-full">
                        <div className="flex">
                            <FiltersMatch />
                        </div>
                        <div className="flex flex-col">
                            {Array(newGoalNameState).fill().map((_, i) => (
                                <div className="mt-5 w-full">
                                    <GoalComponent />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )}

                {newGoalNameState >= 0 && (
                    <div className={`${newGoalNameState >= 1 && 'mt-5'} hover:text-indigo-400 cursor-pointer mb-5`}
                         onClick={() =>
                             setNewGoalNameState(newGoalNameState + 1)
                         }>
                        <p className="text-indigo-500">+ Add condition</p>
                    </div>
                )}


                {newGoalNameState >= 1 && (
                    <div>
                        <div className=" hover:text-indigo-400 cursor-pointer mb-5"
                         onClick={() =>
                             setNewGoalNameState(newGoalNameState - 1)
                         }>
                        <p className=" text-sm text-red-500">Remove goal</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddGoals;
