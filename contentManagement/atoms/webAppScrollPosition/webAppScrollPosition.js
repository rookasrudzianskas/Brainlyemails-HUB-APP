import {atom} from "recoil";

export const appScrollPosition = atom({
    key: 'appScrollPosition', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
