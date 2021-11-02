import React from "react";
import { Song } from ".";

export default {
    title: 'Components/Song',
    component: Song,
    argTypes: {
        songsArray: {
            control: 'array',
            description: 'Array of songs in each album'
        }
    }
}

const Template = args => <Song {...args} />

export const Default = Template.bind({});
Default.args = {
    songsArray: ['Song 1', 'Song 2', 'Song 3']
}