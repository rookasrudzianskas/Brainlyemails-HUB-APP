import {atom} from "recoil";

export const selectedButton = atom({
    key: 'selectedButton', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});
