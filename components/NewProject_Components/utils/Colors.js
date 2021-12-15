import {useRef} from "react";

const inputFile = useRef(null);

export const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
};

export const onColorButtonClickFirst = () => {

};
