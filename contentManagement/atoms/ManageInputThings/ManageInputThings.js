import {atom} from 'recoil';

export const manageInputThings = new atom({
    key: 'manageInputThings',
    default: {
        Text: {
            // isSelected: false,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugit placeat quos dicta, ullam deserunt tenetur nobis dolore ratione voluptate commodi veniam odio cum reiciendis reprehenderit fuga distinctio, quasi alias?',
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
});

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
