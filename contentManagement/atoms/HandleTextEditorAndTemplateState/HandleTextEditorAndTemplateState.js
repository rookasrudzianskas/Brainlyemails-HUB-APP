// HandleTextEditorAndTemplateState
import {atom} from "recoil";

export const handleTextEditorAndTemplate = atom({
    key: 'handleTextEditorAndTemplate', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
