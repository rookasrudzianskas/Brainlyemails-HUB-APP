import {atom} from 'recoil';

export const groupCreationDataCloud = new atom({
    key: 'groupCreationDataCloud',
    default: [
        {
            groupName: 'Magical group'
        }
    ],
});
