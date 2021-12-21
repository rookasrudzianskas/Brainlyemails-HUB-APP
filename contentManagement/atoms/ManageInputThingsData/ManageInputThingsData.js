import {atom} from 'recoil';

export const manageInputThingsData = new atom({
    key: 'manageInputThingsData',
    default: {
        Text: {
            isSelected: false,
            content: 'Something very awesome!',
            style: 'Standard',
            alignment: 'Left',
            spacing: 'Default',
            iterationGroup: 'list',
        },
        // Table: {
        //     isSelected: false,
        // },
        // Separator: {
        //     isSelected: false,
        // },
        // List: {
        //     isSelected: false,
        // },
        // Image: {
        //     isSelected: false,
        // },
        // Code: {
        //     isSelected: false,
        // },
        // Chart: {
        //     isSelected: false,
        // },
        // Button: {
        //     isSelected: false,
        // },
    }
})
