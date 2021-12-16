import {atom} from "recoil";

export const projectName = atom({
    key: 'projectName', // unique ID (with respect to other atoms/selectors)
    default: 'Brainlyemails secret project', // default value (aka initial value)
});
