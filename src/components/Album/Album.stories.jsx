import React from "react";
import { Album } from '.';

export default {
    title: 'Components/Album',
    component: Album,
    argTypes: {
        name: {
            control: 'text'
        },
        releaseDate: {
            control: 'text'
        },
        coverArt: {
            control: 'text'
        }
    }
}

const Template = args => <Album {...args} />

export const Default = Template.bind({});
Default.args = {
    album: { id: 1, album: 'Album 1', releaseDate: '10-10-2017', img: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640' }
}