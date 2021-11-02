import React from "react";
import { LikesCount } from '../LikesCount';
import { SeeMore } from '../SeeMore';

export const AlbumList = ({ albums }) => {
    return (
        <ul>
            {
                albums.map(album => (
                    <li key={album.id}>
                        <strong role="heading" aria-label="headline">{album.album}</strong> {album.date}
                        <LikesCount />
                        <SeeMore songsArray={album.songsArray} />
                    </li>
                ))
            }
        </ul>
    )
}