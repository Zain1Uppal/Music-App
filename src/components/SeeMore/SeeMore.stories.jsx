import React from "react";
import { SeeMore } from ".";

export default {
    title: "Components/SeeMore",
    component: SeeMore,
    argTypes: {
        album: {
            control: 'array',
            description: 'Object of one album'
        },
        songsArray: {
            control: 'array',
            description: 'Array of her songs in one album'
        }
    }
}

const Template = (args) => <SeeMore {...args} />

export const Default = Template.bind({});
Default.args = {
    album: { id: 1, album: 'Album 1', releaseDate: '10-10-2017', img: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640' },
    songsArray: ['Song 1', 'Song 2', 'Song 3']
}