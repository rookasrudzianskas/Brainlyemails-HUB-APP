import {atom} from "recoil";

export const newProjectNavigation = atom({
    key: 'newProjectNavigation', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value
});
