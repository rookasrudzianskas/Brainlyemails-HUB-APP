import {atom} from 'recoil';

export const formDataCloudState = atom({
    key: 'formDataCloudState',
    default: {
        formData: {
            name: '',
            email: '',
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
