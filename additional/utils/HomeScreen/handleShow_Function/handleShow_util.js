import {useState} from "react";

const [show, setShow] = useState(false);

export const handleShow = (scrollY) => {
    if(scrollY > 2550) {
        setShow(true);
    }
    return show;
};

