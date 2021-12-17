import {atom} from 'recoil';

export const emailInformationData = atom({
    key: 'emailInformationData',
    default: {
        senderEmail: '',
        receiverEmail: '',
        subject: '',
        message: '',
    }
});
