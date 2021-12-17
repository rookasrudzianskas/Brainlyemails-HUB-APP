import {atom} from 'recoil';

export const emailInformationData = atom({
    key: 'emailInformationData',
    default: {
        senderEmail: 'rokas@byrookas.com',
        receiverEmail: 'testing@testing.com',
        subject: 'Something very secret',
        message: '',
    }
});
