import React from "react";
import { SeeMore } from ".";

export default {
    title: "Components/SeeMore",
    component: SeeMore,
    argTypes: {
        songsArray: {
            control: 'array',
            description: 'Array of her albums'
        }
    }
}

const Template = (args) => <SeeMore {...args} />

export const Default = Template.bind({});
Default.args = {
    songsArray: [
        'Song 1', 'Song 2', 'Song 3'
    ]
}