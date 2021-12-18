import {atom} from "recoil";

export const handleDiscardEmailModal = atom({
    key: 'handleDiscardEmailModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const handleShowEmailPreviewModal = atom({
    key: 'handleShowEmailPreviewModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const handleEmailSchedulingSystemModal = atom({
    key: 'handleEmailSchedulingSystemModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const handleCreateAutomationModal = atom({
    key: 'handleCreateAutomationModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const handleAutomatedMessageSendingTimeModal = atom({
    key: 'handleAutomatedMessageSendingTimeModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export const handleNewGroupCreationModal = atom({
    key: 'handleNewGroupCreationModal', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});


