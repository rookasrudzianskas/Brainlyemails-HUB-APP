import {atom} from 'recoil';

export const manageInputThings = new atom({
    key: 'manageInputThings',
    default: {
        Text: {
            isSelected: false,
        },
        Table: {
            isSelected: false,
        },
        Separator: {
            isSelected: false,
        },
        List: {
            isSelected: false,
        },
        Image: {
            isSelected: false,
        },
        Code: {
            isSelected: false,
        },
        Chart: {
            isSelected: false,
        },
        Button: {
            isSelected: false,
        },
    }
})
