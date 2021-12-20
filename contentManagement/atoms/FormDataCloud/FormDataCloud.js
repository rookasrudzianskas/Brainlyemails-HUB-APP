import {atom} from 'recoil';

export const formDataCloudState = atom({
    key: 'formDataCloudState',
    default: {
        formData: {
            name: 'This is epic email',
            formName: 'This is banana form 🍌',
            title: 'This is going to be epic 🙎‍♂️',
            description: 'Never miss a thing from _MAGICAL_. You can subscribe for free.\n We don\'t send spam, and if you get bored, you can unsubscribe with one click.',
            buttonLabel: 'COOL',
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
