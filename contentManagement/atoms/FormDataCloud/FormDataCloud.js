import {atom} from 'recoil';

export const formDataCloudState = atom({
    key: 'formDataCloudState',
    default: {
        formData: {
            name: '',
            title: '',
            description: '',
            buttonLabel: '',
            emailAddress: '',
            CONTACT_PROP: '',
            message: '',
        },
        formErrors: {
            name: '',
            email: '',
            message: '',
        },
        formValidity: false,
    },
});
