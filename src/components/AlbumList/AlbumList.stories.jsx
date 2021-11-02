import React, { Component } from "react";
import { AlbumList } from '.';

export default {
    title: 'Components/AlbumList',
    component: AlbumList,
    argTypes: {
        albums: {
            control: 'array',
            description: 'Array of her albums'
        }
    }
}

const Template = args => <AlbumList {...args} />

export const Default = Template.bind({});
Default.args = {
    albums: [
        { id: 1, album: 'Album 1', date: '2021' },
        { id: 2, album: 'Album 2', date: '2022' }
    ]
}