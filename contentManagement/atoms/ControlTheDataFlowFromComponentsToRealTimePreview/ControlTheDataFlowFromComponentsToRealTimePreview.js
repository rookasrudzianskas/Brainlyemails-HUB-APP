import {atom} from 'recoil';

export const ctdffctrtp = new atom({
    key: 'ctdffctrtp',
    default: {
        Text: {
            isSelected: false,
            content: 'Something very awesome!',
            style: 'Standard',
            alignment: 'Left',
            spacing: 'Default',
            iterationGroup: 'list',
        }
    }
})
