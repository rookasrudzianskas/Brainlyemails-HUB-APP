import {atom} from 'recoil';

export const newEmailTemplateDataCloud = new atom({
    key: 'newEmailTemplateDataCloud',
   default: {
       templateName: 'something special',
       templateSubject: '🍌 Banana email template',
   },
});
