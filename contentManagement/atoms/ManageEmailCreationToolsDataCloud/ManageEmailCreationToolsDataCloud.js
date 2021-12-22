import {atom} from 'recoil';

export const manageEmailCreationToolsDataCloud = new atom({
    key: 'manageEmailCreationToolsDataCloud',
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
});
