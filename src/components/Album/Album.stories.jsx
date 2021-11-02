import React from "react";

import { Album } from '.';
import imagePath from '../../static/image.png';

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
            control: 'img'
        }
    }
}

const image = {
    src: imagePath,
    alt: 'my image',
};

const Template = args => <Album {...args} />

export const Default = Template.bind({});

export const Image = () => <img src={image.src} alt={image.alt} />;

export const firstAlbum = Template.bind({});
firstAlbum.args = {
    name: 'album 1',
    releaseDate: '27/10/2019',
    coverArt: Image()
}