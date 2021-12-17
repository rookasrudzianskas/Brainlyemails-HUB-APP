import {atom} from "recoil";

export const handleDiscardEmailModal = atom({
    key: 'handleDiscardEmailModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
