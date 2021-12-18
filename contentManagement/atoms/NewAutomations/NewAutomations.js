import {atom} from 'recoil';

export const newAutomationName = atom({
    key: 'newAutomationName',
    default: '',
});


export const newGoalName = atom({
    key: 'newGoalName',
    default: 0,
});
