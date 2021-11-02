import React, { useState } from "react";
import { Song } from ".";

export default {
    title: 'Components/Song',
    component: Song,
    argTypes: {
        songs: {
            control: 'array',
            description: 'Array of songs in each album'
        }
    }
}

const Template = args => <Song {...args} />

export const Default = Template.bind({});
Default.args = {
    songs: [
        { id: 1, album: 'Album 1', songsArray: ['Song 1', 'Song 2'] },
        { id: 2, album: 'Album 2', songsArray: ['Song 1', 'Song 2'] }
    ]
}